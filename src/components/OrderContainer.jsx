import React, { useState } from 'react';
import States from './States';
import { use } from 'react';
import OrderCart from './Cart/OrderCart';
import CookingCard from './Cart/CookingCard';
import ReadyCart from './Cart/ReadyCart';
import { toast } from 'react-toastify';

const OrderContainer = ({ promise }) => {

    const data = use(promise);
    //   console.log(orders);
  
    const [orders, setOrders] = useState(data);

    const [cookingItem, setCookingItem] = useState([]);
    const [readyItems, setReadyItem] = useState([]);

    const handleOrder = (order) => {
        // toast.success('order called')
     const isExist = cookingItem.find((item) => item.id == order.id);

        if (isExist) {
            toast.error("Order allrady On processing!")
            return;
        }


        const newCookingItem = [...cookingItem, order];
        setCookingItem(newCookingItem);
    };

    const handleCooking = (order) => {
       // cookig time add
       order.cookedAt = new Date().toLocaleTimeString();

        // add cooking 
        const newReadyItem = [...readyItems, order];
        setReadyItem(newReadyItem);

        //remove 
        const remeaning = cookingItem.filter((item) => item.id !== order.id);
        setCookingItem(remeaning);

        // order teke order cart remove
        const remeainingOrder = orders.filter((item) => item.id !== order.id)
        setOrders(remeainingOrder);
    };
    

    return (
        <div>

            <States totalOrder={orders.length}
                cookingTotal={cookingItem.length}
                readyTotal={readyItems.length}
            ></States>

            <section className='container mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-5 px-5'>
                <div className='md:col-span-7 space-y-4'>
                    <h2 className='font-bold text-3xl'>Current Orders</h2>
                    {
                        orders.map(item => (
                            <OrderCart key={item.id} order={item}
                                handleOrder={handleOrder}
                            ></OrderCart>
                        ))
                    }
                </div>
                <div className='md:col-span-5 space-y-4'>
                    <h2 className='font-bold text-3xl'>Cooking Now</h2>
                    <div className='shadow p-10'>
                        {
                            cookingItem.map(order => (
                                <CookingCard key={order.id} order={order}
                                 handleCooking={handleCooking}
                                ></CookingCard>
                            ))
                        }
                    </div>
                    <h2 className='font-bold text-3xl'>Order Ready</h2>
                    <div className='shadow p-10 space-y-4'>
                     {
                        readyItems.map(order => (
                            <ReadyCart key={order.id} order={order}></ReadyCart>
                        ))
                     }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OrderContainer;