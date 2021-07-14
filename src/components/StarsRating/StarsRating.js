import './StarRating.css'

import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating({value = 0, size = "large"}) {

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} precision={0.1} max={10} readOnly className={'rating'} size={size}/>
                <p>{value}/10</p>
            </Box>
        </div>
    );
}