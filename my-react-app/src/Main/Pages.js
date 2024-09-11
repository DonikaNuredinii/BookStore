import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import NavbarHome from "./NavbarHome";
import Footer from "./Footer";
import Buttons from "../Components/Buttons";
import Account from "../Main/Account";
import AccountSettings from "../Main/AccountSettings";
import Contact from "../Main/Contact";
import Categories from "../Main/Categories";
import GiftCard from "../Main/GiftCard";
import Cart from "../Main/Cart";
import Accessories from "./Accessories";
import AuthorList from "./AuthorList";
import AuthorDetails from "./AuthorDetails";
import Invoice from "./Invoice";
import EbookList from "./EbookList";
import EbookDetails from "./EbookDetails";
import BookDetails from "./BookDetails";
import WishlistPage from "./WishlistPage";
import StripeContainer from "../Components/StripeContainer";
import { useWishlist } from "../Components/Wishlist"; // Import the custom hook
import EventsPage from "./EventsPage";

function Pages() {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const { wishlist } = useWishlist(); // Get the wishlist from the custom hook

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.bookId === item.bookId
      );

      if (existingItemIndex !== -1) {
        // If it exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity || 1;
        return updatedCart;
      }

      // If it doesn't exist, add the new item
      const newItem = {
        bookId: item.bookId ?? null, // Ensure this is correctly set
        accessoriesID: item.accessoriesID ?? null,
        giftCardId: item.giftCardId ?? null,
        quantity: item.quantity || 1,
        image: item.image || "",
        price: item.price || 0,
        title: item.title || "No Title",
      };

      console.log("New item added to cart:", newItem); // Debug log

      return [...prevCart, newItem];
    });
  };

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <NavbarHome Toggle={Toggle} />
      {location.pathname !== "/account" && (
        <Buttons
          isSticky={isSticky}
          cartCount={cart.length}
          wishlistCount={wishlist.length} // Pass the wishlist count to the Buttons component
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/bookDetails/:bookID"
          element={<BookDetails addToCart={addToCart} />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/categories"
          element={
            <Categories addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/wishlistPage"
          element={<WishlistPage addToCart={addToCart} />}
        />
        <Route path="/giftCard" element={<GiftCard addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<StripeContainer />} />{" "}
        {/* Use StripeContainer */}
        <Route path="/invoice" element={<Invoice />} />
        <Route
          path="/accessories"
          element={<Accessories addToCart={addToCart} />}
        />
        <Route path="/author-list" element={<AuthorList />} />
        <Route
          path="/AuthorDetails/:authorID"
          element={<AuthorDetails addToCart={addToCart} />}
        />
        <Route path="/ebooks" element={<EbookList addToCart={addToCart} />} />
        <Route path="/EbookDetails/:id" element={<EbookDetails />} />
      </Routes>
      <Footer Toggle={Toggle} />
    </div>
  );
}

export default Pages;
