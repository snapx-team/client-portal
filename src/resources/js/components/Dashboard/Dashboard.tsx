import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard: React.FC = () => {


    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-semibold mb-4">DashBoard</h1>
                <p className="text-gray-700 mb-4">This is the dashboard but also a very nice looking landing page. It will needs evoke the feeling of security, high tech, clean. Here we need to display the jobsites that they are a member/admin of. Other things we can include here is a call to action to connect a new jobsite to their account via erp agent, and a   </p>
                <p className="text-gray-700 mb-4">Click the link below to navigate to a jobsite</p>
            </div>


            <Link
                key='/partners/site/info'
                to='/partners/site/info'

            >
                <li className="col-span-1 flex shadow-sm rounded-md pt-5">

                    <div
                        className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">JS1
                    </div>

                    <div
                        className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md">
                        <div className="flex-1 px-4 py-2 text-sm leading-5">
                            <p className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">A
                                random jobsite</p>
                            <p className="text-gray-500">Active</p>
                        </div>
                    </div>
                </li>

            </Link>

        </div>);
};

export default Dashboard;
