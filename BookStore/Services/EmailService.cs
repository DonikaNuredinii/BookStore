using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using BookStore.Models;

namespace BookStore.Services
{
    public class EmailService
    {
        private readonly SmtpSettings _smtpSettings;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IOptions<SmtpSettings> smtpSettings, ILogger<EmailService> logger)
        {
            _smtpSettings = smtpSettings.Value;
            _logger = logger;
        }

        public async Task SendEmailAsync(string[] recipientEmails, string senderEmail, string subject, string message)
        {
            try
            {
                using var smtpClient = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
                {
                    Credentials = new NetworkCredential(_smtpSettings.Username, _smtpSettings.Password),
                    EnableSsl = _smtpSettings.EnableSsl
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(senderEmail),
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true
                };

                foreach (var email in recipientEmails)
                {
                    mailMessage.To.Add(email);
                }

                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                _logger.LogError($"An error occurred while sending the email: {ex.Message}");
                throw;
            }
        }
    }
}
