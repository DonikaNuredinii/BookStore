using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class BookUploadRequest
{
    public int? BookID { get; set; }
    public string ISBN { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PublicationDate { get; set; }
    public int PageNumber { get; set; }
    public decimal Price { get; set; }
    public DateTime DateOfadition { get; set; }
    public string Type { get; set; }
    public int PublishingHouseId { get; set; }
    public int StockId { get; set; }
    public int LanguageId { get; set; }
    public IFormFile Image { get; set; }
    public List<int> AuthorIds { get; set; }
    public List<int> CategoryIds { get; set; }
}
