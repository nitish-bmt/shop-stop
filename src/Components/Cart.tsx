import React, { useContext } from 'react';
import {useState} from 'react';
import { CartContext } from './Main';
import { MainContext } from './Main';
import { Box, Typography, Button } from './Common/Imports/importsMUI';

const CartPage: React.FC = () => {
    const { inCart } = useContext(CartContext);
    const { setInCart } = useContext(CartContext);
    const { products } = useContext(MainContext);

    const [total, setTotal] = useState<number>(0);

    const cartProducts = products.filter((product) => inCart.includes(product.id));

    const removeFromCart = (id: string) => {
        setInCart((prevInCart) => prevInCart.filter((itemId) => itemId !== id));
    };
    const clearCart = () => {
        setInCart([]);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Cart
            </Typography>
            {cartProducts.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <>
                    {cartProducts.map((product) => (
                        <Box key={product.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Box sx={{ marginRight: 2 }}>
                                <img src={product.image} alt={product.title} style={{ width: 100 }} />
                            </Box>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6">{product.title}</Typography>
                                <Typography variant="body1">{product.description}</Typography>
                                <Typography variant="body1">Price: ${product.price}</Typography>
                            </Box>
                            <Button variant="outlined" onClick={() => removeFromCart(product.id)}>
                                Remove
                            </Button>
                        </Box>
                    ))}

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, m:4, p: 4}}>
                        <Typography variant="h6" sx={{m: 4}} component="h3" color="text.secondary" gutterBottom>
                            ${total}
                        </Typography>
                        <Button variant="contained" onClick={()=>{clearCart();}}>
                            Clear Cart
                        </Button>
                    </Box>

                </>
            )}
        </Box>
    );
};

export default CartPage;
