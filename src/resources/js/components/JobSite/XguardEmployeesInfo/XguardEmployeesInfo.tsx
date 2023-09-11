import React from 'react';
import BottomNavBar from '../BottomNavBar';

const XguardEmployeesInfo: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 flex-col py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">Xguard Employees</h1>
                <p className="text-gray-700 mb-4">Here we allow the user to select a date-range to view all the jobsite
                    shifts that were created and the associated xguard employee + all their info (like checkin and
                    checkout + any other info want to add in the future such as photo confirmations</p>
            </div>
            <BottomNavBar/>
        </div>);
};

export default XguardEmployeesInfo;
