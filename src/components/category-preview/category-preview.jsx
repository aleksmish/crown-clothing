import React from 'react'
import { CategoryPreviewContainer, PreviewContainer } from  './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <PreviewContainer>
        {
          products
            .filter((_, idx) => idx < 4)
            .map(product => <ProductCard key={product.id} product={product}/>)
        }
      </PreviewContainer>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview