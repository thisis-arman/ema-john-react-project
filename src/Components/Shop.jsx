import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Shop.css'
import Cart from './Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts ]=useState([])
    const [cart , setCart] =useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
 
   useEffect(()=>{
    const storedCart = getShoppingCart()
    const savedCart = [];
    for (const id in storedCart){
        const addedProduct =products.find(product =>product.id === id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct); 
        }
    }
    setCart(savedCart)
   },[products])


    const handleAddToCart =(product)=>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container' >
           <div className='products'>
           {products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                     />)
            }
           </div>
           <div className='cart-container'>
           <Cart carts={cart}/>
            </div>            
        </div>
    );
};

export default Shop;