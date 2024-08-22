namespace BookStore.Models
{
    public class SmtpSettings
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool EnableSsl { get; set; }
        public string Username { get; set; } // Optional, can be used if needed
        public string Password { get; set; } // Optional, can be used if needed
        public string From { get; set; } // Default sender email address
    }
}
