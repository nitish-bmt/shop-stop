import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import getProducts from '../utils/fetchApi';

import { ProductData } from './Common/ProductData';
import { CartItems } from './Common/CartItems';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localforage from 'localforage';


export const MainContext  = createContext<{
    products: ProductData[];
    setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>;
}>({
    products: [],
    setProducts: () => {},
});

export const CartContext  = createContext<{
    inCart: string[];
    setInCart: React.Dispatch<React.SetStateAction<string[]>>;
}>({
    inCart: [],
    setInCart: () => {},
});

const Main: React.FC = ()=>{

    const [products, setProducts] = useState<ProductData[]>([]);
    const [inCart, setInCart] = useState<string[]>([]);

    useEffect(()=>{
        const fetch = async()=>{ 
            const p = await getProducts();
            setProducts(p);
            // setData(products);
            console.log(products);
        }
        fetch();
    },[]);

    useEffect(()=>{
        localforage.setItem('cartItems', inCart);
    },[inCart]);
    
    useEffect(() => {
        (async () => {
            const items = await localforage.getItem<string[]>('cartItems');
            if(items){
                setInCart(items);
            }
        })();
    }, []);

    return(
        <>
            <MainContext.Provider value={{products, setProducts}}>
                <CartContext.Provider value={{ inCart, setInCart }}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </Router>
                </CartContext.Provider>
            </MainContext.Provider>
        </>
    );
}

export default Main;