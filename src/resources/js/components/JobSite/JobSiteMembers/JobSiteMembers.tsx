import React from 'react';
import BottomNavBar from '../BottomNavBar';

const ClientSetting: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 flex-col py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">Job Site Members</h1>
                <p className="text-gray-700 mb-4">
                    Here is where we should a list of everyone who has access to view this jobsite information. This is where an admin can view/assign/remove people to this jobsite as well as assign a role:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2">Only admins can add/edit/remove other "clients" and change their roles from "readonly" to "admin"</li>
                    <li className="mb-2">Non admins will only be able to see a list of any other employee that also has access to this info</li>
                </ul>
            </div>
            <BottomNavBar/>
        </div>);
};

export default ClientSetting;
