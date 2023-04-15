import React from 'react';
import OrderOverview from '../components/dashboard/OrderOverview';
import RecentOrder from '../components/dashboard/RecentOrder';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-xl font-medium pb-6'>Dashboard Overview</h2>
            <OrderOverview/>
            <h2 className='text-xl font-medium pb-6'>Recent Order</h2>
           <RecentOrder/>
        </div>
    );
};

export default Dashboard;