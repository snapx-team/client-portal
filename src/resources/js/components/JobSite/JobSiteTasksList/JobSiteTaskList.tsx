import React from 'react';
import BottomNavBar from '../BottomNavBar';

const JobSiteTaskList: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 flex-col py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">Task List</h1>
                <p className="text-gray-700 mb-4">He we just show a list of all the tasks that are associated to the jobsite. there should be a toggle that shows either every task or just today's tasks. </p>
            </div>
            <BottomNavBar/>
        </div>);
};

export default JobSiteTaskList;
