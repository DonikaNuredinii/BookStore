using BookStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Security;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly MyContext _context;
        private readonly SmtpSettings _smtpSettings;

        public ContactUsController(MyContext context, IOptions<SmtpSettings> smtpSettings)
        {
            _context = context;
            _smtpSettings = smtpSettings.Value;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactUs>>> GetContacts()
        {
            var contacts = await _context.Contacts.ToListAsync();
            if (contacts == null || !contacts.Any())
            {
                return NotFound();
            }
            return Ok(contacts);
        }

        [HttpGet("{ContactID}")]
        public async Task<ActionResult<ContactUs>> GetContact(int ContactID)
        {
            var contact = await _context.Contacts.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        [HttpPost]
        public async Task<ActionResult<ContactUs>> PostContact(ContactUs contactUs)
        {
            _context.Contacts.Add(contactUs);
            await _context.SaveChangesAsync();

            try
            {
                await SendEmailToAdminAsync(contactUs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while sending the email.", error = ex.Message });
            }

            return CreatedAtAction(nameof(GetContact), new { ContactID = contactUs.ContactID }, contactUs);
        }

        private async Task SendEmailToAdminAsync(ContactUs contactUs)
        {
            // Retrieve admin emails
            var adminEmails = await _context.Users
                .Where(user => user.RolesID == 3) // Assuming RolesID = 3 corresponds to Admin
                .Select(user => user.Email)
                .ToListAsync();

            if (!adminEmails.Any())
            {
                throw new InvalidOperationException("No admin email addresses found.");
            }

            var subject = "New Contact Us Message";
            var body = $"You have received a new message from {contactUs.Name} ({contactUs.Email}).\n\nMessage:\n{contactUs.Message}";

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(contactUs.Name, contactUs.Email)); // Use user's email as the "From" address
            message.Sender = new MailboxAddress(_smtpSettings.From, _smtpSettings.From);
    

            // Add the user's email as the Reply-To address
            message.ReplyTo.Add(new MailboxAddress(contactUs.Name, contactUs.Email));

            // Add each admin email to the 'To' field
            foreach (var adminEmail in adminEmails)
            {
                if (!string.IsNullOrWhiteSpace(adminEmail))
                {
                    message.To.Add(new MailboxAddress("", adminEmail));
                }
            }

            message.Subject = subject;
            message.Body = new TextPart("plain") { Text = body };

            using var client = new SmtpClient();
            await client.ConnectAsync(_smtpSettings.Host, _smtpSettings.Port, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_smtpSettings.Username, _smtpSettings.Password);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }

        [HttpPut("{ContactID}")]
        public async Task<IActionResult> PutContact(int ContactID, ContactUs contactUs)
        {
            if (ContactID != contactUs.ContactID)
            {
                return BadRequest();
            }

            _context.Entry(contactUs).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Contacts.Any(e => e.ContactID == ContactID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{ContactID}")]
        public async Task<IActionResult> DeleteContact(int ContactID)
        {
            var contact = await _context.Contacts.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }

            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
