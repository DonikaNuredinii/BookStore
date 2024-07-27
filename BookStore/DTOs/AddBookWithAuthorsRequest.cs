using BookStore.Models;

public class AddBookWithAuthorsRequest
{
    public Book Book { get; set; }
    public List<int> AuthorIds { get; set; }
}
