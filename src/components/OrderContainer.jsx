import React, { useState } from 'react';
import States from './States';
import { use } from 'react';
import OrderCart from './Cart/OrderCart';
import CookingCard from './Cart/CookingCard';
import ReadyCart from './Cart/ReadyCart';

const OrderContainer = ({ promise }) => {

    const orders = use(promise);
    //   console.log(orders);
  
    const [removeOrder, setRemoveOrder] = useState(orders);

    const [cookingItem, setCookingItem] = useState([]);
    const [readyItems, setReadyItem] = useState([]);

    const handleOrder = (order) => {
     const isExist = cookingItem.find((item) => item.id == order.id);

        if (isExist) {
            alert("alrady cooking")
            return
        }


        const newCookingItem = [...cookingItem, order];
        setCookingItem(newCookingItem);
    };

    const handleCooking = (order) => {
        // add cooking 
        const newReadyItem = [...readyItems, order];
        setReadyItem(newReadyItem);

        //remove 
        const remeaning = cookingItem.filter((item) => item.id !== order.id);
        setCookingItem(remeaning);

        // order teke order cart remove
        const remeainingOrder = removeOrder.filter((item) => item.id !== order.id)
        setRemoveOrder(remeainingOrder);
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