using BookStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly MyContext _contactUsContext;

        public ContactUsController(MyContext contactUsContext)
        {
            _contactUsContext = contactUsContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactUs>>> GetContacts()
        {
            var contacts = await _contactUsContext.Contacts.ToListAsync();
            if (contacts == null || contacts.Count == 0)
            {
                return NotFound();
            }
            return contacts;
        }

        [HttpGet("{ContactID}")]
        public async Task<ActionResult<ContactUs>> GetContact(int ContactID)
        {
            var contact = await _contactUsContext.Contacts.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        [HttpPost]
        public async Task<ActionResult<ContactUs>> PostContact(ContactUs contactUs)
        {
            _contactUsContext.Contacts.Add(contactUs);
            await _contactUsContext.SaveChangesAsync();

           
            SendEmailToAdmin(contactUs);

            return CreatedAtAction(nameof(GetContact), new { ContactID = contactUs.ContactID }, contactUs);
        }

        private async Task SendEmailToAdminAsync(ContactUs contactUs)
{
            var adminEmails = _contactUsContext.Users
                                .Where(user => user.RolesID == 3)
                                .Select(user => user.Email)
                                .ToList();

            if (!adminEmails.Any())
            {
                return;
            }

                var fromAddress = new MailAddress("your-email@gmail.com", "Your Website");
                const string fromPassword = "ajzb yfiz afbc czhf";
                const string subject = "New Contact Us Message";
                string body = $"You have received a new message from {contactUs.Name} ({contactUs.Email}).\n\nMessage:\n{contactUs.Message}";

                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };

                foreach (var adminEmail in adminEmails)
                {
                    var toAddress = new MailAddress(adminEmail);
                    using (var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = subject,
                        Body = body
                    })
                    {
                        await smtp.SendMailAsync(message);
                    }
                }
}




        [HttpPut("{ContactID}")]
        public async Task<IActionResult> PutContact(int ContactID, ContactUs contactUs)
        {
            if (ContactID != contactUs.ContactID)
            {
                return BadRequest();
            }

            _contactUsContext.Entry(contactUs).State = EntityState.Modified;
            try
            {
                await _contactUsContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_contactUsContext.Contacts.Any(e => e.ContactID == ContactID))
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
            var contact = await _contactUsContext.Contacts.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }

            _contactUsContext.Contacts.Remove(contact);
            await _contactUsContext.SaveChangesAsync();

            return NoContent();
        }
    }
}