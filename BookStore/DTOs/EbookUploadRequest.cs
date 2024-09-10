using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

public class EbookUploadRequest
{
    public string ISBN { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PublicationDate { get; set; }
    public int PageNumber { get; set; }
    public decimal Price { get; set; }
    public DateTime DateOfadition { get; set; }
    public int PublishingHouseId { get; set; }
    public int StockId { get; set; }
    public IFormFile PdfFile { get; set; }
    public IFormFile Image { get; set; } 
    public List<int> AuthorIds { get; set; } 
    public List<int> CategoryIds { get; set; } 
}