import React, { useContext } from 'react'
import { CartContext } from "../../contexts/cart.context"
import "./checkout.styles.scss"
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
      <table className='checkout-container'>
        <thead className='checkout-header'>
          <tr className='header-block'> 
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className='checkout-block'>
          {cartItems.map(cartItem => {
            return (
              <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
          })}
        </tbody>
        <tfoot className='checkout-total'>
          <tr>
            <td>
              <span className='value'>Total: {cartTotal}$</span>
            </td>
          </tr>
        </tfoot>
      </table>
  )
}

export default Checkout