import React from 'react'
import { CheckoutItemContainer } from './checkout-item.styles.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <td className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </td>
      <td>
        <span className='name'>{name}</span>
      </td>
      <td>
        <span className='quantity'>
          <div className='arrow' onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
      </td>
      <td>
        <span className='price'>{price}</span>
      </td>
      <td>
        <div className='remove-button' onClick={clearItemHandler}>
          &#10005;
        </div>
      </td>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem