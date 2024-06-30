import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import Navbar from './Navbar';
import ProductList from './ProductList';
import getProducts from '../utils/fetchApi';

import { ProductData } from './Common/ProductData';

export const MainContext  = createContext<{
    products: ProductData[]|null;
    setProducts: React.Dispatch<React.SetStateAction<ProductData[]|null>>;
}>({
    products: [],
    setProducts: () => {},
});

const Main: React.FC = ()=>{

    const [products, setProducts] = useState<ProductData[]|null>(null);
    const [inCart, setInCart] = useState<boolean[]|null>(null);

    useEffect(()=>{
        const fetch = async()=>{ 
            const p = await getProducts();
            setProducts(p);
            // setData(products);
            console.log(products);
        }
        fetch();
    },[]);

    return(
        <>
            <Navbar/>
            <h1>Main</h1>
            <MainContext.Provider value={{products, setProducts}}>
                <ProductList/>
            </MainContext.Provider>
        </>
    );
}

export default Main;