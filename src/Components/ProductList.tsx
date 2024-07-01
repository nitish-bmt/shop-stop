import React, { useContext } from 'react';

import Product from './Product';
import getProducts from '../utils/fetchApi';
import { ProductData } from './Common/ProductData';

import { useEffect } from 'react';
import { useState } from 'react';

// importing contexts
import {MainContext} from './Main';
import {CartContext} from './Main';

interface ProductProps extends ProductData {
    inCart: boolean;
    toggleCartStatus: (id: string) => void;
}

const ProductList: React.FC = ()=>{

    const {products } = useContext(MainContext);
    const {inCart, setInCart} = useContext(CartContext);

    const toggleCartStatus = (id: string) => {
        setInCart((prevCart: string[]) => {
            if (prevCart.includes(id)) {
                return prevCart.filter(cartId => cartId !== id);
            } else {
                return [...prevCart, id];
            }
        });
    };

    return(
        <>
            {/* <h3>This is the product list</h3> */}
            {/* <h1>{products[0].title}</h1> */}
            {products && products.map((p: ProductData) => (
                <Product 
                key={p.id}
                {...p} 
                inCart={inCart.includes(p.id)} 
                toggleCartStatus={toggleCartStatus} 
            />
            ))}
        </>
    );
}

export default ProductList;