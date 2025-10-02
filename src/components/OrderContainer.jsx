import React, { useState } from 'react';
import States from './States';
import { use } from 'react';
import OrderCart from './Cart/OrderCart';

const OrderContainer = ({promise}) => {

    const orders = use(promise);
     console.log(orders);
    
 const [cookinItem, setCookingItem] = useState([]);


    return (
        <div>
            
              <States totalOrder={orders.length}></States>

              <section className='container mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-5 px-5'>
                     <div className='md:col-span-7 space-y-4'>
                        <h2 className='font-bold text-3xl'>Current Orders</h2>
                        {
                            orders.map(item => (
                                <OrderCart key={item.id} order={item}></OrderCart>
                            ))
                        }
                     </div>
                     <div className='md:col-span-5 space-y-4'>
                        <h2 className='font-bold text-3xl'>Cooking Now</h2>
                        <div className='shadow p-10'>
                        
                        </div>
                        <h2 className='font-bold text-3xl'>Order Ready</h2>
                        <div className='shadow p-10'>
                        
                        </div>
                     </div>
              </section>

        </div>
    );
};

export default OrderContainer;