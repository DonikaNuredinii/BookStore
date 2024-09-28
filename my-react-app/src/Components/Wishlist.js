import React, { useState, useEffect } from 'react';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    const itemID = item.bookID || item.accessoriesID;
    if (item && itemID) {
      setWishlist((prevWishlist) => {
        if (!prevWishlist.some((wItem) => (wItem.bookID || wItem.accessorieID) === itemID)) {
          const updatedWishlist = [...prevWishlist, item];
          return updatedWishlist;
        }
        return prevWishlist;
      });
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => {
        const itemID = item.bookID || item.accessoriesID;
        return itemID !== id;
      });
      return updatedWishlist;
    });
  };

  const isItemInWishlist = (id) => {
    return wishlist.some((item) => {
      const itemID = item.bookID || item.accessoriesID;
      return itemID === id;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem('wishlist');
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isItemInWishlist,
  };
};
