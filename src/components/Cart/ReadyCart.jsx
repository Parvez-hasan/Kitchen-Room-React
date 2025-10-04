import React from 'react';

const ReadyCart = ({order}) => {
    return (
        <div className='border-2 border-amber-400 p-5 rounded-lg '>
            <h2 className='text-2xl font-bold'>{order.order_title}</h2>
            <h2>Table No: {order.order_no}</h2>
            <h2>Water Id: {order.waiterId}</h2>
            <h2>Cooking Time: {order.cookedAt}</h2>
        </div>
    );
};

export default ReadyCart;