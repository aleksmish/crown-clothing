import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CheckoutItemContainer } from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

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