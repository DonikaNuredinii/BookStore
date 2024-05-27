using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Models
{
    public class Accessories
    {
        public int AccessoriesID { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Seller { get; set; }
        public string Description { get; set; }
        public string Dimensions { get; set; }
        public decimal Price { get; set; }
        public DateTime DateofAddition { get; set; }
        public Stock Stock { get; set; }
    }
}

