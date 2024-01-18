import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, TCartItem } from "./cart.types";

const addCartItem = (cartItems: TCartItem[], productToAdd: CategoryItem): TCartItem[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems: TCartItem[], productToRemove: TCartItem): TCartItem[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id != productToRemove.id)
  } 
  return cartItems.map(cartItem => cartItem.id === productToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  ) 
}

const clearCartItem = (cartItems: TCartItem[], productToClear: TCartItem): TCartItem[] => {
  return cartItems.filter(cartItem => cartItem.id != productToClear.id)
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, TCartItem[]>

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean))

export const setCartItems = withMatcher((cartItems: TCartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: TCartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}

export const removeItemFromCart = (cartItems: TCartItem[], cartItemToRemove: TCartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}

export const clearItemFromCart = (cartItems: TCartItem[], productToClear: TCartItem) => {
  const newCartItems = clearCartItem(cartItems, productToClear)
  return setCartItems(newCartItems)
}
