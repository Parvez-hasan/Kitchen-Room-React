import React from 'react';
import States from './States';
import { use } from 'react';

const OrderContainer = ({promise}) => {

    const orders = use(promise);
    
    console.log(orders);
    

    return (
        <div>
            
              <States></States>

        </div>
    );
};

export default OrderContainer;