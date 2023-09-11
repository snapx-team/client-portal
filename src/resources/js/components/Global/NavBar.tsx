import React, {Fragment} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {
    faLink,
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const navLinks = [
    {name: 'Dashboard', to: '/partners/dashboard',},
    {name: 'Contact', to: '/partners/dashboard',},
];

const userNavLinks = [
    {name: 'Profile', to: '/partners/profile',},
    {name: 'Settings', to: '/partners/settings',},
    {name: 'Sign Out', to: '/partners/sign-out',},
];

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-gray-700">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-12 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FontAwesomeIcon icon={faTimes} className="block h-6 w-6"/>
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} className="block h-6 w-6"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center opacity-75">
                                    <img
                                        className="h-7 w-7 w-auto rounded-lg"
                                        src="https://images2.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/iovnmeiclmm4xgthasmw"
                                        alt="Your Company"
                                    />
                                    <FontAwesomeIcon icon={faLink} className="block h-5 w-5 text-white px-1"/>

                                    <img
                                        className="h-7 w-7 w-auto rounded-lg"
                                        src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/348271181_937014500876219_5057438785425280395_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=l2ujw3ljACkAX_MJxRd&_nc_ht=scontent-yyz1-1.xx&oh=00_AfDRhjMwM9FdIopw0bD0k9ug1YfNAdLzGvR5WMeUZ30gCw&oe=64FE87DC"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navLinks.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5"/>
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-9 w-9 rounded-full shadow"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                            {userNavLinks.map((item) => (
                                                <Menu.Item key = {item.name}>
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                        className="block px-4 py-2 text-sm text-gray-700"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
