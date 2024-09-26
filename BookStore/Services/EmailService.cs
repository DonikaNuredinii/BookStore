using BookStore.Models;
using Microsoft.Extensions.Options;
using System.Globalization;
using System.Net.Mail;
using System.Text;
using System.Net.Mime; 
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Services
{
    public class EmailService
    {
        private readonly SmtpSettings _smtpSettings;
        private readonly MyContext _context;

        public EmailService(IOptions<SmtpSettings> smtpSettings, MyContext context)
        {
            _smtpSettings = smtpSettings.Value;
            _context = context;
        }

        private SmtpClient CreateSmtpClient()
        {
            var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
            {
                Credentials = new System.Net.NetworkCredential(_smtpSettings.Username, _smtpSettings.Password),
                EnableSsl = _smtpSettings.EnableSsl 
            };
            return smtpClient;
        }

        public async Task SendEmailAsync(string[] recipientEmails, string subject, string body)
        {
            using (var smtpClient = CreateSmtpClient())
            {
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.Username), 
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                foreach (var recipientEmail in recipientEmails)
                {
                    mailMessage.To.Add(recipientEmail);
                }

                await smtpClient.SendMailAsync(mailMessage);
            }
        }

        public async Task SendGiftCardEmailAsync(string recipientEmail, GiftCard giftCard)
        {
            var body = $@"
                <h1>You've Received a Gift Card!</h1>
                <p>Amount: {giftCard.Amount:C}</p>
                <p>Code: {giftCard.Code}</p>
                <p>Design: <img src='cid:giftCardDesign' alt='Gift Card Design' /></p>
                <p>Message: {giftCard.Message}</p>
                <p>From: {giftCard.RecipientName}</p>";

            using (var smtpClient = CreateSmtpClient())
            {
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.Username), 
                    Subject = "Your Gift Card",
                    Body = body,
                    IsBodyHtml = true
                };

                mailMessage.To.Add(recipientEmail);
                mailMessage.Attachments.Add(new Attachment(@"C:\Users\hp\OneDrive\Desktop\BookStore\my-react-app\src\Images\gift1.png", "giftCardDesign"));

                await smtpClient.SendMailAsync(mailMessage);
            }
        }
        public async Task SendInvoiceEmailAsync(string[] recipientEmails, string invoiceNumber, decimal totalPrice, DateTime invoiceDate, string invoiceDetails, List<int> cartItemIds)
        {
            var cartItems = await _context.CartItems
                .Include(ci => ci.Book)
                .Include(ci => ci.Accessories)
                .Where(ci => cartItemIds.Contains(ci.CartItemId))
                .ToListAsync();

            var itemRows = new StringBuilder();
            var imageAttachments = new List<Attachment>(); 

            foreach (var item in cartItems)
            {
                string itemName = null;
                decimal itemPrice = 0;
                int itemQuantity = item.Quantity;
                string imagePath = null;

                if (item.Book != null)
                {
                    itemName = item.Book.Title;
                    itemPrice = item.Book.Price;
                    imagePath = Path.Combine("C:\\Users\\hp\\OneDrive\\Desktop\\BookStore\\my-react-app\\src\\Images", item.Book.Image);
                }
                else if (item.Accessories != null)
                {
                    itemName = item.Accessories.Name;
                    itemPrice = item.Accessories.Price;
                    imagePath = Path.Combine("C:\\Users\\hp\\OneDrive\\Desktop\\BookStore\\my-react-app\\src\\Images", item.Accessories.Image);
                }

                if (!string.IsNullOrEmpty(imagePath) && System.IO.File.Exists(imagePath))
                {
                    var attachment = new Attachment(imagePath)
                    {
                        ContentDisposition = { Inline = true, FileName = Path.GetFileName(imagePath) },
                        ContentId = Path.GetFileName(imagePath) 
                    };
                    imageAttachments.Add(attachment);

                    itemRows.Append($@"
                <tr>
                    <td style='text-align:center;'><img src='cid:{attachment.ContentId}' style='width:50px; height:50px;' alt='{itemName}' /></td>
                    <td style='text-align:left;'>{itemName}</td>
                    <td style='text-align:center;'>${itemPrice:F2}</td>
                    <td style='text-align:center;'>{itemQuantity}</td>
                </tr>");
                }
            }

            var body = $@"
        <div style='border: 1px solid #0f4365; padding: 20px;'>
            <h2 style='color:#0f4365;'>Thank You for Your Purchase!</h2>
            <h3>Invoice #{invoiceNumber}</h3>
            <p>Total Price: ${totalPrice:F2}</p>
            <p>Invoice Date: {invoiceDate:MM/dd/yyyy}</p>
            <p>Details: {invoiceDetails}</p>
            <table style='width: 100%; border-collapse: collapse;'>
                <thead>
                    <tr style='background-color: #0f4365; color: white;'>
                        <th style='border: 1px solid #0f4365; padding: 8px;'>Image</th>
                        <th style='border: 1px solid #0f4365; padding: 8px;'>Item</th>
                        <th style='border: 1px solid #0f4365; padding: 8px;'>Price</th>
                        <th style='border: 1px solid #0f4365; padding: 8px;'>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        </div>";

            using (var smtpClient = CreateSmtpClient())
            {
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.Username),
                    Subject = "Your Invoice",
                    Body = body,
                    IsBodyHtml = true
                };

                foreach (var recipientEmail in recipientEmails)
                {
                    mailMessage.To.Add(recipientEmail);
                }

                foreach (var attachment in imageAttachments)
                {
                    mailMessage.Attachments.Add(attachment);
                }

                await smtpClient.SendMailAsync(mailMessage);
            }
        }



    }
}
