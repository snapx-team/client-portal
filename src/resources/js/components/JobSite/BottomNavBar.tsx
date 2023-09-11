import React from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuildingUser,
    faListCheck,
    faShield,
    faUserGroup,
    faCog,
} from '@fortawesome/free-solid-svg-icons';

const navLinks = [
    { to: '/partners/site/info', icon: faBuildingUser, text: 'Job Site' },
    { to: '/partners/site/task-list', icon: faListCheck, text: 'Tasks', },
    { to: '/partners/site/xguard-employees', icon: faShield, text: 'Guards' },
    { to: '/partners/site/members', icon: faUserGroup, text: 'Members' },
    { to: '/partners/site/settings', icon: faCog, text: 'Settings' },
];

const BottomNavBar: React.FC = () => {
    return (
        <div className="container m-auto">

            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className="inline-flex flex-col items-center justify-center px-5 border-r border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600"
                        >
                            <FontAwesomeIcon
                                icon={link.icon}
                                className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            />
                            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                                {link.text}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomNavBar;
