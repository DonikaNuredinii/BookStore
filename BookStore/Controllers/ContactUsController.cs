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
        public async Task<ActionResult<IEnumerable<ContactUs>>> GetContact()
        {
            var contact = await _contactUsContext.Contact.ToListAsync();
            if (contact == null || contact.Count == 0)
            {
                return NotFound();
            }
            return contact;
        }

        [HttpGet("{ContactID}")]
        public async Task<ActionResult<ContactUs>> GetContact(int ContactID)
        {
            var contact = await _contactUsContext.Contact.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        [HttpPost]
        public async Task<ActionResult<ContactUs>> PostContact(ContactUs contactUs)
        {
            _contactUsContext.Contact.Add(contactUs);
            await _contactUsContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetContact), new { ContactID = contactUs.ContactID }, contactUs);
        }

        [HttpPut("{ContactID}")]
        public async Task<ActionResult> PutContact(int ContactID, ContactUs contactUs)
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
                if (!_contactUsContext.Contact.Any(e => e.ContactID == ContactID))
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
        public async Task<ActionResult> DeleteContact(int ContactID)
        {
            var contact = await _contactUsContext.Contact.FindAsync(ContactID);
            if (contact == null)
            {
                return NotFound();
            }

            _contactUsContext.Contact.Remove(contact);
            await _contactUsContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
