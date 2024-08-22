using System.Text.Json.Serialization;

namespace BookStore.Models
{
    public class Event
    {
        public int EventsID { get; set; }
        public string EventName { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string Description { get; set; }

        [JsonIgnore]
        public ICollection<Author> Authors { get; set; } = new HashSet<Author>();
    }
}
