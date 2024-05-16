import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext=createContext(null)
const CART_KEY='cart';  
const EMPTY_CART={
  items:[],
  totalPrice:0,
  totalCount:0
}
export default function CartProvider({children}) {
  const initCart=getCartFromLocalStorage();
  const [cartItems, setCartItems]=useState(initCart.items);
  const [totalPrice, setTotalPrice]=useState(initCart.totalPrice);  
  const [totalCount, setTotalCount]=useState(initCart.totalCount);
 useEffect(() => {
    const totalPrice = sumPrices(cartItems);
    const totalCount = sumQuantities(cartItems);
    setTotalPrice(totalPrice);
    setTotalCount(totalCount);

    localStorage.setItem(CART_KEY, JSON.stringify({ items: cartItems, totalPrice, totalCount }));
}, [cartItems]);

function getCartFromLocalStorage(){
  const storedCard=localStorage.getItem(CART_KEY);
  return storedCard ? JSON.parse(storedCard) : EMPTY_CART;
}
const sumPrices = (items) => {
    return items.reduce((total, item) => {
        // Ensure item.price is a valid number before adding
        return total + (typeof item.price === 'number' ? item.price : 0);
    }, 0);
}

const sumQuantities = (items) => {
    return items.reduce((total, item) => {
        // Ensure item.quantity is a valid number before adding
        return total + (typeof item.quantity === 'number' ? item.quantity : 0);
    }, 0);
}

const addToCart = bread => {
  const cartItem = cartItems.find(item => item.bread.id === bread.id);
  if(cartItem){
    changeQuantity(cartItem,cartItem.quantity+1);
  }else{
    setCartItems([...cartItems,{bread,quantity:1,price:bread.price}]);
  }
}


const clearCart =()=>{
  localStorage.removeItem(CART_KEY);
  const {items,totalPrice,totalCount}=EMPTY_CART;
  setCartItems(items);
  setTotalPrice(totalPrice);
  setTotalCount(totalCount);
}
  const removeFromCart = breadId => {
    const filteredCartItems=cartItems.filter(item => item.bread.id !== breadId);
    setCartItems(filteredCartItems);
  }

  const changeQuantity = (cartItem,newQuantity) => {
    const {bread}=cartItem;
    const changedCartItem ={
      ...cartItem,
      quantity:newQuantity,
      price:bread.price*newQuantity
    };
    setCartItems(cartItems.map(item => item.bread.id === bread.id ? changedCartItem : item));
  };
  return (
    <CartContext.Provider value={{cart:{items: cartItems, totalPrice,totalCount},removeFromCart,changeQuantity,addToCart,clearCart,}}>
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => useContext(CartContext);