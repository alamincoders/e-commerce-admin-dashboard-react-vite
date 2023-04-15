import React from 'react';

const RecentOrder = () => {
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
                    <tr className='text-gray-900 border-b-[1px] border-gray-100'>
                        <td className='text-start text-sm pl-[15px] py-4'>Order Time</td>
                        <td className='text-start text-sm pl-[15px] py-4'>Delivery Address</td>
                        <td className='text-start text-sm pl-[15px] py-4'>Phone</td>
                        <td className='text-start text-sm pl-[15px] py-4'>Payment Method</td>
                        <td className='text-start text-sm pl-[15px] py-4'>Order Amount</td>
                        <td className='text-start text-sm pl-[15px] py-4'>Status</td>
                    </tr>
                    <tr className='text-gray-900'>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Order Time</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Delivery Address</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Phone</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Payment Method</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Order Amount</th>
                        <th className='font-semibold text-start text-sm uppercase pl-[15px] py-4'>Status</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default RecentOrder;