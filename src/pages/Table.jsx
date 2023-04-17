import React from 'react';
import CustomerTable from '../components/Table/CustomerTable';
import OrderTable from '../components/Table/OrderTable';

const Table = () => {
    return (
        <div>
            <h2 className='text-xl pb-4'>Table For Customer</h2>
            <CustomerTable/>
            <OrderTable/>
        </div>
    );
};

export default Table;