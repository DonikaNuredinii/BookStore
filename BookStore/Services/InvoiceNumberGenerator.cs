namespace BookStore.Services
{
    public static class InvoiceNumberGenerator
    {
        public static string GenerateUniqueInvoiceNumber()
        {
            // Example format: INV-YYYYMMDD-HHMMSS-RANDOM
            var timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmss");
            var random = new Random().Next(1000, 9999);
            return $"INV-{timestamp}-{random}";
        }
    }
}
