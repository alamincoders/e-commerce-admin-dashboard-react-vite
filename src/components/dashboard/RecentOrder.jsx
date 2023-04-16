import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

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

    useEffect(()=>{
        const endOffset =itemsOffset + itemsPerPage
        setCurrentItems(orders.slice(itemsOffset, endOffset))
        setPageCount(Math.ceil(orders.length/itemsPerPage))
    },[itemsOffset, itemsPerPage, orders])
    const handlePageClick = (event)=>{
        const newOffset = (event.selected + itemsPerPage) % orders.length
        setItemsOffset(newOffset)
    }

    return (
        <div>
            <div
                className='bg-white border-[1px] border-gray-200/80 rounded-[10px] shadow-custom'>
                <table className='w-full'>
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
                   
                </table>
                    <div className='text-gray-900 flex justify-between w-full pl-[15px] pr-[30px] py-6 text-sm'>
                        <p className='uppercase font-semibold'>showing {currentItems.length} of {orders.length}</p>
                        <div className='flex items-center gap-3'>
                        <div className="flex justify-center my-8">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="< Previous"
                                renderOnZeroPageCount={null}
                                // marginPagesDisplayed={1}
                                containerClassName="flex gap-2"
                                pageLinkClassName="px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 focus:outline-none"
                                activeLinkClassName="px-4 py-2 rounded-lg bg-gray-400 text-white"
                                previousLinkClassName="px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 mr-2"
                                nextLinkClassName="px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ml-2"
                                breakLinkClassName="px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                                disabledClassName="opacity-50 cursor-not-allowed"
                                activeClassName=""
                            />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default RecentOrder;