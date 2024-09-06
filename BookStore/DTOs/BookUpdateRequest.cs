using BookStore.Models;
using System.Collections.Generic;

namespace BookStore.DTOs
{
    public class BookUpdateRequest
    {
        public Book Book { get; set; }
        public List<int> AuthorIds { get; set; }
        public List<int> CategoryIds { get; set; } 
    }
}
