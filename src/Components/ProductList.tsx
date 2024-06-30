import React, { useContext } from 'react';

import Product from './Product';
import getProducts from '../utils/fetchApi';
import { ProductData } from './Common/ProductData';

import { useEffect } from 'react';
import { useState } from 'react';

// importing main context
import {MainContext} from './Main';

const ProductList: React.FC = ()=>{

    const {products, setProducts} = useContext(MainContext);

    return(
        <>
            <h3>This is the product list</h3>
            {/* <h1>{products[0].title}</h1> */}
            {products&&(
                
                products.map(
                (p:ProductData)=>{
                    return <Product {...p}/>
                })
            )}
        </>
    );
}

export default ProductList;