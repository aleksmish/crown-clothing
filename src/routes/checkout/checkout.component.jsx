import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutBlock, CheckoutContainer, CheckoutHeader, CheckoutFoot, HeaderBlock, CheckoutTotal, CheckoutPayment } from './checkout.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import PaymentForm from '../../components/payment-form/payment-form.component'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
        <CheckoutFoot>
          <CheckoutTotal>
            <td>
              <span className='value'>Total: {cartTotal}$</span>
            </td>
          </CheckoutTotal>
          <CheckoutPayment >
            <td>
              <PaymentForm/>
            </td>
          </CheckoutPayment>
        </CheckoutFoot>
      </CheckoutContainer>
  )
}

export default Checkout