'use client'
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const addToCart = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        }

        if (isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return {...prod, quantity: prod.quantity + newItem.quantity}
                }
                return prod
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, newItem])
        }
    }
    
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const updateCart = cart.filter((item) => item.id === id)
        setCart([...updateCart])
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((acc,el) => acc + el.price * el.quantity, 0)
    }

    const getQuantity = () => {
        return cart.reduce((acc, el) => acc + el.quantity, 0)
    }

    const decrementItem = () => {
        const updateCart = cart.map((prod) => {
            if (prod.id === id) {
                const newQuantity = Math.max(prod.quantity - 1, 1)
                return {
                    ...prod, quantity: newQuantity
                }
            }
            return prod
        })
        setCart(updateCart)
    }

    const incrementItem = (id, stock) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id){
                const newQuantity = Math.min(prod.quantity + 1, stock)
                return {
                    ...prod, quantity: newQuantity
                }
            }
            return prod
        })
        setCart(updatedCart)
    }

    const currentQuantity = (id) => {
        const prod = cart.find((item) => item.id === id)
        return prod ? prod.quantity : 0
    }

    return(
        <CartContext.Provider
        value={
            {
            cart,
            addToCart,
            isInCart,
            removeItem,
            clearCart,
            totalPrice,
            getQuantity,
            decrementItem,
            incrementItem,
            currentQuantity
            } 
        }>
            {children}
        </CartContext.Provider>
    )
}   
