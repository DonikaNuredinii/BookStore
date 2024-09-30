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
        public async Task SendGiftCardEmailAsync(string recipientEmail, GiftCard giftCard, string senderName)
        {
            var userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            var imagePath = Path.Combine(userProfile, "OneDrive", "Desktop", "BookStore", "my-react-app", "src", "Images", giftCard.SelectedDesign);
            string imageContentId = "giftCardImage";

            using (var smtpClient = CreateSmtpClient())
            {
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.Username),
                    Subject = "You've Received a Gift Card!",
                    IsBodyHtml = true
                };

                mailMessage.To.Add(giftCard.RecipientEmail);

                var body = $@"
        <html>
        <body style='margin: 0; padding: 0;'>
                <h2 style='margin: 0; color: #0f4365; font-size: 30px; font-weight: bold;'>
                    🎉 You've Received a Gift Card Gifted by Someone Special! 🎉
                </h2>
                <p style='margin: 5px 0; color: #0f4365; font-size: 20px; font-weight: bold;'>
                    Gift Card Code: <span style='color: #FFD700;'>{giftCard.Code}</span>
                </p>
            <table width='700' height='400' cellpadding='0' cellspacing='0' style='margin: auto;'>

                <tr>
                    <td style='
                        background: url(cid:{imageContentId}) no-repeat center center; 
                        background-size: cover; 
                        color: white; 
                        padding: 20px;
                        border-radius: 20px;
                        text-align: center;'>
                        <div style= padding: 20px; text-align: left;'>
                            
                            <p style='margin: 5px 0;font-size: 20px;'>From: {senderName}</p>
                            <p style='margin: 5px 0;font-size: 20px;'>To: {giftCard.RecipientName}</p>
                            <p style='margin: 5px 0;font-size: 20px;'>Amount: {giftCard.Amount:C} €</p>
                            <p style='margin: 5px 0;font-size: 20px;'>Message: {giftCard.Message}</p>

                        </div>
                    </td>
                </tr>
            </table>
        </body>
        </html>";

                mailMessage.Body = body;

                if (File.Exists(imagePath))
                {
                    var attachment = new Attachment(imagePath)
                    {
                        ContentId = imageContentId
                    };
                    attachment.ContentDisposition.DispositionType = "inline";
                    mailMessage.Attachments.Add(attachment);
                }
                else
                {
                    Console.WriteLine($"Image file not found: {imagePath}");
                    return;
                }

                try
                {
                    Console.WriteLine("Preparing to send email...");
                    await smtpClient.SendMailAsync(mailMessage);
                    Console.WriteLine("Gift card email sent successfully.");
                }
                catch (SmtpException smtpEx)
                {
                    Console.WriteLine($"SMTP Error: {smtpEx.Message}");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error sending email: {ex.Message}");
                }
            }
        }


        public async Task SendInvoiceEmailAsync(string[] recipientEmails, string invoiceNumber, decimal totalPrice, DateTime invoiceDate, string invoiceDetails, List<int> cartItemIds)
        {
            var cartItems = await _context.CartItems
                .Include(ci => ci.Book)
                .Include(ci => ci.Accessories)
                .Include(ci => ci.GiftCard)
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
                var userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);

                if (item.Book != null)
                {
                    itemName = item.Book.Title;
                    itemPrice = item.Book.Price;
                    // Dynamically generate image path for books
                    imagePath = Path.Combine(userProfile, "OneDrive", "Desktop", "BookStore", "my-react-app", "src", "Images", item.Book.Image);
                }
                else if (item.Accessories != null)
                {
                    itemName = item.Accessories.Name;
                    itemPrice = item.Accessories.Price;
                    // Dynamically generate image path for accessories
                    imagePath = Path.Combine(userProfile, "OneDrive", "Desktop", "BookStore", "my-react-app", "src", "Images", item.Accessories.Image);
                }
                else if (item.GiftCard != null)
                {
                    itemName = item.GiftCard.Code;
                    itemPrice = item.GiftCard.Amount;
                    // Dynamically generate image path for gift cards
                    imagePath = Path.Combine(userProfile, "OneDrive", "Desktop", "BookStore", "my-react-app", "src", "Images", item.GiftCard.SelectedDesign);
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
                    Subject = $"Invoice #{invoiceNumber}",
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
