import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts ]=useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container' >
           <div className='products'>
           {products.map(product => <Product 
                    key={product.id}
                    product={product} />)
            }
           </div>
            <p>Order summary</p>
            
        </div>
    );
};

export default Shop;