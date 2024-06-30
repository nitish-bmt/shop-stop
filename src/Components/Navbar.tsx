import React from 'react';
import {AppBar, Toolbar, Typography} from './Common/Imports/importsMUI';

const Navbar: React.FC = ()=>{

    return(
        <>
            <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div">
                    ShopStop
                </Typography>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;