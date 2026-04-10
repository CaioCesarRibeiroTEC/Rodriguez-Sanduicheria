"use client"; // <-- ESSA LINHA É A GRANDE MÁGICA NO NEXT.JS!

import { createContext, useState, useEffect } from "react";

// --- Hook para detectar o tamanho da janela ---
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Define o tamanho inicial
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}

export const UserContext = createContext();

const formatoReal = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const UserStore = ({children}) => {
    const { width } = useWindowSize();
    
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (cart.length === 0) {
            setIsCartOpen(false);
        }
    }, [cart]);

    const toggleCart = () => {
        if (cart.length === 0) {
            setIsCartOpen(false);
            return;
        }
        setIsCartOpen(prevState => !prevState);
    };

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
        alert(`${item.name} foi adicionado ao carrinho!`);
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.cartId !== itemId));
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }
        setCart(prevCart => prevCart.map(item => 
            item.cartId === itemId ? { ...item, qt: newQuantity } : item
        ));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((acc, item) => acc + (item.finalPrice * item.qt), 0);
    
    return (
        <UserContext.Provider value={{
    
            cart, addToCart, removeFromCart,
            updateCartItemQuantity, cartTotal, formatoReal,
            isCartOpen, toggleCart, setIsCartOpen,
            width,
            clearCart
        }}>{children}</UserContext.Provider>
    )
}