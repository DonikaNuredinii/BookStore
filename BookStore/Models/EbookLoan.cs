using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class EbookLoan
    {
        public int EbookLoanID { get; set; }

        [ForeignKey("Ebook")]
        public int EbookID { get; set; }
        [JsonIgnore]
        public Ebook Ebook { get; set; }

        public DateTime LoanStartDate { get; set; }
        public DateTime LoanDueDate { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        [JsonIgnore]
        public User User { get; set; } 

        public bool IsReturned { get; set; } = false;
    }
}
