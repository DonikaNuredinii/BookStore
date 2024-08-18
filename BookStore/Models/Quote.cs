using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Quote
    {
        public int QuoteID { get; set; }
        public string Text { get; set; }

        [JsonIgnore]
        public ICollection<AuthorQuotes> AuthorQuotes { get; set; } = new HashSet<AuthorQuotes>();
    }
}
