import React, { useContext } from 'react'
import { CartContext } from "../../contexts/cart.context"
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutBlock, CheckoutContainer, CheckoutHeader, CheckoutTotal, HeaderBlock } from './checkout.styles.jsx'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock> 
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </HeaderBlock>
        </CheckoutHeader>
        <CheckoutBlock>
          {cartItems.map(cartItem => {
            return (
              <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
          })}
        </CheckoutBlock>
        <CheckoutTotal>
          <tr>
            <td>
              <span className='value'>Total: {cartTotal}$</span>
            </td>
          </tr>
        </CheckoutTotal>
      </CheckoutContainer>
  )
}

export default Checkout