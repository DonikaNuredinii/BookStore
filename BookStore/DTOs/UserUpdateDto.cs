namespace BookStore.DTOs
{
    public class UserUpdateDTO
    {
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public int RolesID { get; set; }
    }

}
