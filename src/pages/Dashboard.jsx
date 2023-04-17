import React from 'react';
import OrderOverview from '../components/dashboard/OrderOverview';
import RecentOrder from '../components/dashboard/RecentOrder';
import Chart from '../components/dashboard/Chart';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-xl font-medium pb-6'>Dashboard Overview</h2>
            <OrderOverview/>
            
            <Chart/>
            <h2 className='text-xl font-medium pb-6'>Recent Order</h2>
           <RecentOrder/>
        </div>
    );
};

export default Dashboard;