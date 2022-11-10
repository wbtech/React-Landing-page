import React, {useState} from 'react'
import ProductServices from './ProductServices';

const ProductGallery = () => {
  
const [state, setState] = useState({
    products: ProductServices.getAllProducts()
})

  
  return (
    <>
    <div>
      <div>

      </div>
      {
        // products.map((product) =>{
         
        } )
      }
    </div>


    </>
  )
}

export default ProductGallery