import React, { useState, useEffect } from 'react';
export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist).filter(book => book && book.bookID) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (book) => {
    if (book && book.bookID) {
      setWishlist((prevWishlist) => {
        const updatedWishlist = [...prevWishlist, book];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        return updatedWishlist;
      });
    }
  };

  const removeFromWishlist = (bookID) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((book) => book && book.bookID !== bookID);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem('wishlist');
  };

  const isBookInWishlist = (bookID) => {
    return wishlist.some((book) => book && book.bookID === bookID);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isBookInWishlist,
  };
};
