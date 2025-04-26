import React, { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const CreateContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemQauntity , setItemQauntity] = useState(0)
  const [total , setTotal] = useState(0)

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(()=>{
  const total = cart.reduce((accumulator , currentItem)=>{
    return accumulator + currentItem.price * currentItem.quantity
  }, 0)
  setTotal(total)
})
// update item quantity
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(()=>{
  if(cart){
    const quantity = cart.reduce((accumulator , currentItem)=>{
      return accumulator + currentItem.quantity;
    },0)
    setItemQauntity(quantity)
  }
})

  // add to cart
  const addToCart = (product, id) => {
    const newItems = { ...product, quantity: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItems]);
    }
  };
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // increase quantaty
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease quantay
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id == id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CreateContext.Provider
      value={{
        addToCart,
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        itemQauntity,
        total
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CartProvider;
