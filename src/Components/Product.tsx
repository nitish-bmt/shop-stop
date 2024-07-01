import React from 'react';
import { ProductData } from './Common/ProductData';
import { ProductProps } from './Common/ProductData';

import { Box, Typography, Button } from './Common/Imports/importsMUI';

const Product: React.FC<ProductProps> = ({ id, image, title, price, description, inCart, toggleCartStatus }) => {
    return (
        <Box component="section" sx={{ 
            width: '100%', 
            maxWidth: 600,
            mx: 'auto',
            my: 4,
            p: 4,
            border: '1px solid grey', 
            borderRadius: 2, 
            boxShadow: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            backgroundColor: 'background.paper'
        }}>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    maxWidth: 200, // Reduced image size
                    borderRadius: 2,
                    mb: 2,
                }}
                alt={title}
                src={image}
            />
            <Typography variant="h5" component="h2" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h6" component="h3" color="text.secondary" gutterBottom>
                ${price}
            </Typography>
            <Typography variant="body1" component="p" paragraph>
                {description}
            </Typography>
            <Button variant="contained" color={inCart ? "secondary" : "primary"} onClick={() => toggleCartStatus(id)}>
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </Button>
        </Box>
    );
}

export default Product;
