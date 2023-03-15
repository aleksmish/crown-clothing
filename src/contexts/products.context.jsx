import { createContext, useState } from 'react'

import PRODUCTS from '../SHOP_DATA.json'

export const ProductContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS)
    return (
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}