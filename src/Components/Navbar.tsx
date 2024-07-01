import React from 'react';

// react hook imports
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

// react context imports
import { CartContext } from './Main';

// mui imports
import {AppBar, Toolbar, Typography, IconButton, Badge} from './Common/Imports/importsMUI';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar: React.FC = ()=>{

    const { inCart } = useContext(CartContext);

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };
    const handleHomeClick = () => {
        navigate('/');
    };

    return(
        <>
           <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" onClick={handleHomeClick} sx={{ flexGrow: 1 } }>
                        ShopStop
                    </Typography>
                    <IconButton color="inherit" onClick={handleCartClick}>
                        <Badge badgeContent={inCart.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;