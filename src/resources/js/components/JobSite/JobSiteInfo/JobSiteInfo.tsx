import React from 'react';
import BottomNavBar from '../BottomNavBar';

const JobSiteInfo: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 flex-col py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">Jobsite</h1>
                <p className="text-gray-700 mb-4">This is where we can show all the data pertaining to the jobsite as of today. Another thing that's quite complex is history and upcoming. We need to discuss that.</p>
            </div>
            <BottomNavBar/>
        </div>);
};

export default JobSiteInfo;
