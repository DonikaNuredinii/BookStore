using BookStore.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class OrderDetails
{
    [Key]
    public int OrderDetailsID { get; set; }

    [Required]
    [DataType(DataType.Currency)]
    public decimal TotalPrice { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime InvoiceDate { get; set; }

    [DataType(DataType.Date)]
    public DateTime? OrderShipDate { get; set; }

    [Required]
    public string InvoiceNumber { get; set; }


    [ForeignKey("CartItem")]
    public int CartItemId { get; set; }
    public virtual CartItem CartItem { get; set; }

}
