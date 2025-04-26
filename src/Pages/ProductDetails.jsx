import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {CreateContext} from '../context/CartContext'
import  { ProductContext } from '../context/Productcontext'

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CreateContext)

  const product = products.find((item)=>{
    return item.id === parseInt(id)
    
  })
  console.log(product);
  if(!product){
    return(
      <section className='h-screen flexCenter '>
         <h3 className='h3'>
         ....Loading
         </h3>
      </section>
    )
  }
  const {title , price, description , image} = product
  return (
    <section className='max-padd-container py-28 xl:py-32'>
      <div className='flex flex-col xl:flex-row gap-16'>
        {/* container */}
        <div className='flex-1 flexCenter'>
          {/* imge */}
          <img src={image} alt="prodyad" height={255} width={255} className=' object-contain aspect-square p-1'/>
        </div>
        {/* text */}
        <div className='flex-1'>
          <h3 className='h3'>{title}</h3>
          <h5 className='bold-24'>{price}</h5>
          <p className='my-8'>{description}</p>
          <button onClick={()=>addToCart(product,product.id)} className='btn-dark'>Add to Cart</button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails