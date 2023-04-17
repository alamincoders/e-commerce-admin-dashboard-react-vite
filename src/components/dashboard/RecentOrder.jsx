import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { UsePagination } from '../../hooks/UsePagination';

const RecentOrder = () => {
    const [orders, setOrders] = useState([])
    const fetchData = () => {
    axios
        .get("/order.json")
        .then((response) => {
        setOrders(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    };
    useEffect(() => {
    fetchData();
    }, []);

    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemsOffset, setItemsOffset] = useState(0)
    const itemsPerPage = 5

    return (
        <div>
            <div
                className='bg-white border-[1px] border-gray-200/80 rounded-[10px] shadow-custom'>
                <table className='w-full'>
                    <tbody>
                    <tr className='text-gray-500 bg-gray-100/50 border-b-[1px] border-gray-200/80'>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Order Time</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Delivery Address</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Phone</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Payment Method</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Order Amount</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-2'>Status</th>
                    </tr>
                    {
                        currentItems.map(order=> <tr key={order._id} className='text-gray-900 border-b-[1px] border-gray-100 capitalize'>
                        <td className='text-start text-sm pl-[15px] py-4'>{order.order_time}</td>
                        <td className='text-start text-sm pl-[15px] py-4'>{order.delivery_address}</td>
                        <td className='text-start text-sm pl-[15px] py-4'>{order.phone}</td>
                        <td className='text-start text-sm pl-[15px] py-4 font-bold'>{order.payment_method}</td>
                        <td className='text-start text-sm pl-[15px] py-4 font-bold'>${order.order_amount}</td>
                        <td className='text-start text-sm pl-[15px] py-4 '><span className='bg-accent-300/50 px-2 py-[1px] rounded-full'>{order.status}</span></td>
                        </tr>)
                    }
                    </tbody>
                </table>
                    <div className='text-gray-900 flex justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm'>
                        <p className='uppercase font-semibold'>showing ({itemsOffset+1} - {itemsOffset+ currentItems.length}) of {orders.length}</p>
                        <UsePagination pageCount={pageCount} setPageCount={setPageCount} itemsOffset={itemsOffset} setItemsOffset={setItemsOffset} setCurrentItems={setCurrentItems} itemsPerPage={itemsPerPage} items={orders}/>
                    </div>
            </div>
        </div>
    );
};

export default RecentOrder;