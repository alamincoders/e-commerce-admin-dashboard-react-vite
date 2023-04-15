import React from 'react';
import OrderOverview from '../components/dashboard/OrderOverview';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-xl font-medium pb-6'>Dashboard Overview</h2>
            <OrderOverview/>
            <div className="grid col-1 bg-white h-96 shadow-custom"></div>
        </div>
    );
};

export default Dashboard;