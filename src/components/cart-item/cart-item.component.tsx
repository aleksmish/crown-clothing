import React, { FC, memo } from 'react'
import { CartItemContainer, ItemDetails } from  './cart-item.styles'
import { TCartItem } from '../../store/cart/cart.types.js'

export type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
      <CartItemContainer>
        <img loading='lazy' src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
          <h2 className='name'>{name}</h2>
          <span className='price'>{quantity} x ${price}</span>
        </ItemDetails>
      </CartItemContainer>
    )
  }
)
export default CartItem