import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

            <div className="grid lg:grid-cols-3 gap-5 mb-16">
                <div className="rounded bg-white h-40 shadow-custom"></div>
                <div className="rounded bg-white h-40 shadow-custom"></div>
                <div className="rounded bg-white h-40 shadow-custom"></div>
            </div>
            <div className="grid col-1 bg-white h-96 shadow-custom"></div>
        </div>
    );
};

export default DashboardPage;