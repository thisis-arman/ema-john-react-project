import React from 'react';
import './Product.css'
import { FaCartPlus } from 'react-icons/fa';


const Product = ({product}) => {

    const {img, id, name,price,ratings,seller} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>$ {price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings}</p>
            <button className='addtoCart-btn'>Add to Cart  <FaCartPlus/></button>
        </div>
    );
};

export default Product;