import React from 'react';

const ReviewItem = ({product}) => {
    const{name,id,img} =product
    return (
        <div>
           <h1>Header .js{product} </h1>
        </div>
    );
};

export default ReviewItem;