'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  size?: string
  image?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string, size?: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotal: () => 0
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Normalizar size para comparação
      const itemSize = item.size || ''
      
      const existingItem = prevCart.find((cartItem) => {
        const cartItemSize = cartItem.size || ''
        return cartItem.productId === item.productId && cartItemSize === itemSize
      })

      if (existingItem) {
        return prevCart.map((cartItem) => {
          const cartItemSize = cartItem.size || ''
          if (cartItem.productId === item.productId && cartItemSize === itemSize) {
            return { ...cartItem, quantity: cartItem.quantity + item.quantity }
          }
          return cartItem
        })
      }

      return [...prevCart, item]
    })
  }

  const removeFromCart = (productId: string, size: string = '') => {
    setCart((prevCart) => {
      const compareSize = size || ''
      return prevCart.filter((item) => {
        const itemSize = item.size || ''
        return !(item.productId === productId && itemSize === compareSize)
      })
    })
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    // Garantir que quantity seja um número válido
    const newQuantity = Math.max(0, Math.floor(quantity))
    
    if (newQuantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCart((prevCart) => {
      const normalizedSize = size || ''
      
      const updatedCart = prevCart.map((item) => {
        const itemSize = item.size || ''
        
        // Comparar productId e size normalizados
        if (item.productId === productId && itemSize === normalizedSize) {
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      
      return updatedCart
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

