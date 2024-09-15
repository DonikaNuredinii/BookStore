namespace BookStore.DTOs
{
    public class PasswordUpdateModel
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
    }

}
