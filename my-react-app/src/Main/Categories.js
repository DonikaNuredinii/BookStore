import React, { useState } from 'react';
import "../App.css";

  const CategoriesF = () => {
    const genres = [
      { id: 1, name: "Adventure" },
      { id: 2, name: "Art" },
      { id: 3, name: "Biography" },
      { id: 4, name: "Children" },
      { id: 5, name: "Comics" },
      { id: 6, name: "Crime" },
      { id: 7, name: "Drama" },
      { id: 8, name: "Education" },
      { id: 9, name: "Fantasy" },
      { id: 10, name: "Fiction" },
      { id: 11, name: "Graphic Novels" },
      { id: 12, name: "Health" },
      { id: 13, name: "History" },
      { id: 14, name: "Horror" },
      { id: 15, name: "Music" },
      { id: 16, name: "Mystery" },
      { id: 17, name: "Philosophy" },
      { id: 18, name: "Poetry" },
      { id: 19, name: "Psychology" },
      { id: 20, name: "Religion" },
      { id: 21, name: "Romance" },
      { id: 22, name: "Science" },
      { id: 23, name: "Science Fiction" },
      { id: 24, name: "Self-help" },
      { id: 25, name: "Sports" },
      { id: 26, name: "Thriller" },
      { id: 27, name: "Travel" },
    ];
    const books = [
        { id: 1, title: "Historia E Bukurise", genreId: 2, author: "Umberto Eco", price: 40.00, imageSrc: require("../Images/Historiaebukuris2.jpg")  },
        { id: 2, title: "Koha dhe Hapesira", genreId: 2, author: "Mehmed Vokshi", price: 20.0, imageSrc: require("../Images/Kohadhehapsira2.jpg") },
        { id: 3, title: "Arti Prej Zanafilles Te Van Gogh", genreId: 2, author: "NN", price: 20.00,imageSrc: require("../Images/arti2.jpg") },
        { id: 4, title: "Pertej", genreId: 2, author: "Fahredin Spahija", price: 12.00,imageSrc: require("../Images/pertej2.png") },
        { id: 5, title: "Kohet E Artit 2", genreId: 2, author: "Pierluigi De Vecchi", price: 16.00, imageSrc: require( "../Images/koheteartit2.jpg" ) },
        { id: 6, title: "Vidhni Si Artist", genreId: 2, author: "Austin Kleon", price: 8.00,imageSrc: require("../Images/vidhni2.jpg") },
        { id: 7, title: "Historia E Dizajnit", genreId: 2, author: "Gabriella D Amato", price: 14.00,imageSrc: require("../Images/hdizajnit2.jpg") },
        { id: 8, title: "Ngjyrose Lumbardhin", genreId: 2, author: "Rina Krasniqi", price: 12.00, imageSrc: require("../Images/ngjyrose2.png") },
        { id: 9, title: "Xeh", genreId: 2, author: "Alban Fejza", price: 20.00,imageSrc: require("../Images/xeh2.jpg")},
        { id: 10, title: "Shqiperia Ne Art", genreId: 2, author: "Ferid Hudhri", price: 50.00,imageSrc: require("../Images/shqiperia2.jpg") },
        { id: 11, title: "Brum", genreId: 2, author: "Alban Fejza", price: 7.50, imageSrc: require("../Images/brum2.jpg") },
        { id: 12, title: "Jeta Ime", genreId: 3, author: "L D Trockij", price: 7.00,imageSrc: require("../Images/jeta3.jpg") },
        { id: 13, title: "Cironka", genreId: 3, author: "Lisa Brennan Jobs", price: 12.00,imageSrc: require("../Images/cironka3.jpg") },
        { id: 14, title: "Momentet Vendimtare", genreId: 3, author: "George Bush", price: 20.00, imageSrc: require("../Images/momentet3.jpg") },
        { id: 15, title: "Blloku", genreId: 3, author: "Isuf Kalo", price: 13.30,imageSrc: require("../Images/blloku3.jpg") },
        { id: 16, title: "E Verteta Ime", genreId: 3, author: "Hillary Clinton", price: 14.00,imageSrc: require("../Images/everteta3.jpg") },
        { id: 17, title: "Ali Baba", genreId: 3, author: "Jack Ma", price: 10.00, imageSrc: require("../Images/alibaba3.jpg")  },
        { id: 18, title: "Ahmet Zogu", genreId: 3, author: "Ahmet Zogu", price: 12.00,imageSrc: require("../Images/vidhni2.jpg") },
        { id: 19, title: "Te Behesh", genreId: 3, author: "Michelle Obama", price: 18.00,imageSrc: require("../Images/tebehesh3.jpg") },
        { id: 20, title: "Steve Jobs", genreId: 3, author: "Walter Isaacson", price: 12.00 ,imageSrc: require("../Images/steve3.jpg")},
        { id: 21, title: "Tirana E Nones", genreId: 3, author: "Blendi Fevziu", price: 12.00,imageSrc: require("../Images/tirana3.jpg") },
        { id: 22, title: "Enver Hoxha", genreId: 3, author: "Blendi Fevziu", price: 15.00,imageSrc: require("../Images/enver3.jpg") },
        { id: 233, title: "Toke E Premtuar", genreId: 3, author: "Barack Obama", price: 25.00,imageSrc: require("../Images/toke3.jpg") },  
          

    ];
      // Gjendja për zhanrin e zgjedhur
      const [selectedGenre, setSelectedGenre] = useState(null);
      // Filtrimi i librave sipas zhanrit të zgjedhur
      const filteredBooks = selectedGenre ? books.filter(book => book.genreId === selectedGenre.id) : books;
      return (
        <div className="main-content">
          <div className="sidebarc">
            <nav className="nav">
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>
                    <a href={`#${genre.name.toLowerCase()}`} onClick={() => setSelectedGenre(genre)}>
                      {genre.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="cards">
        {filteredBooks.map(book => (
          <div className="card" key={book.id}>
            <div className="card-image">
            <img src={book.imageSrc} alt={book.title} className="book-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{book.title}</h3>
              <p className="card-author">Author: {book.author}</p>
              <p className="card-price">Price: €{book.price}</p>
              <button class="buy-now-btn">Add to Card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    };
  
  export default CategoriesF;