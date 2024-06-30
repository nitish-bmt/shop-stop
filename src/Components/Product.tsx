import React from 'react';
import {ProductData} from './Common/ProductData';
import {Box, Typography} from './Common/Imports/importsMUI';

const Product: React.FC<ProductData> = (props: ProductData)=>{
    return(
        <>
            <Box component="section" sx={{ width: 1, p: 2, border: '1px dashed grey' }}>
                <Box
                    component="img"
                    sx={{
                        width: '25%',
                    }}
                    alt="The house from the offer."
                    src={props.image}
                    />
                <Typography>{props.title}</Typography>
                <Typography>{props.price}</Typography>
                <Typography>{props.description}</Typography>
            </Box>

        </>
    );
}

export default Product;