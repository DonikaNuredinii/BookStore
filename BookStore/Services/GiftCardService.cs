namespace BookStore.Models
{
    public class GiftCardService
    {
        private static Random random = new Random();

        public string GenerateGiftCardCode()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, 10)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
