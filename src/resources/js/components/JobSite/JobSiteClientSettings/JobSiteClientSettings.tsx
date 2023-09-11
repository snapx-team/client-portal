import React from 'react';
import BottomNavBar from '../BottomNavBar';

const ClientSetting: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 flex-col py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">Client Job Site Settings</h1>
                <p className="text-gray-700 mb-4">
                    This is where we allow a user manage certain setting pertaining to that specific jobsite:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">Notification Settings (we can create push and text notifications)</li>
                    <li className="mb-2">changing emergency contact number for the site</li>
                    <li className="mb-2">basically changing any simple thing that they would normally need to call us for</li>
                </ul>
            </div>
            <BottomNavBar/>
        </div>);
};

export default ClientSetting;
