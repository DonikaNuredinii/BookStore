using BookStore.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

[Table("Ebooks")]
public class Ebook : Book
{
    public string Content { get; set; }
    [JsonIgnore]
    public ICollection<EbookLoan> EbookLoans { get; set; } = new List<EbookLoan>();
    public bool IsLoaned => EbookLoans.Any(l => !l.IsReturned && l.LoanDueDate >= DateTime.Now);
}
