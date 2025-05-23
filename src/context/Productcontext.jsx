import React, { createContext,  useEffect, useState } from 'react'



// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();


const ProductProvider = ({children}) => {
const [products , setProducts] = useState([]);

useEffect(()=>{
  const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()

        setProducts(data)
        // console.log(data);
        
  }
  fetchProducts()
},[])

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider