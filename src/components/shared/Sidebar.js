import React from 'react'
import { Link, useLocation } from 'react-router-dom' // Assuming you're using React Router for navigation
import classNames from 'classnames'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { selectSidebar } from '../../store/sidebarSlice'

export default function Sidebar() {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(selectSidebar)

    return (
        <div>
            {/* Mobile Sidebar */}
            <div
                className={classNames(
                    'fixed inset-y-0 left-0 z-40 w-64 h-full border-r-2 border-gray-100 bg-white md:block 2xl:w-72 dark:bg-gray-50 transition-transform duration-300 ease-in-out',
                    { 'transform translate-x-0': isSidebarOpen, 'transform -translate-x-full': !isSidebarOpen }
                )}
            >
                {/* Sidebar content */}
                <div className="p-4">
                    {/* Navigation Links */}
                    <div className="h-[calc(100%-80px)] overflow-y-auto">
                        <div className="mt-4 3xl:mt-6 pb-3">
                            <div className="mb-2 px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8">
                                {/* Brand Section */}
                                <div className="flex items-center gap-2 px-1 py-3">
                                    <FcBullish fontSize={24} />
                                    <span className="text-cyan-900 text-lg">Vishal</span>
                                </div>

                                {/* Sidebar Links */}
                                <div className="py-4 flex flex-col gap-1">
                                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                                        <SidebarLink key={item.key} item={item} />
                                    ))}
                                </div>

                                {/* Bottom Section Links */}
                                <div className="flex flex-col gap-1 pt-4 border-t border-neutral-300 mt-60">
                                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                                        <SidebarLink key={item.key} item={item} />
                                    ))}

                                    {/* Logout Section */}
                                    <div className="flex items-center gap-2 px-1 py-3 cursor-pointer">
                                        <HiOutlineLogout className="text-xl ml-4" />
                                        <Link to="/login" className="hover:underline">
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="fixed bottom-0 left-0 z-50 hidden h-full w-[270px] border-r-2 border-gray-100 bg-white xl:block 2xl:w-72 dark:bg-gray-50">
                {/* Logo section */}
                <div className="bg-gray-50 sticky top-0 z-40 px-6 pb-5 pt-5 2xl:px-8 2xl:pt-6 dark:bg-gray-100/5">
                    <Link to="/" aria-label="Site Logo" className="text-cyan-800 hover:text-cyan-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 155 28"
                            className="max-w-[155px]"
                        >
                            {/* Insert your SVG path here */}
                        </svg>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="h-[calc(100%-80px)]">
                    <div className="mt-4 3xl:mt-6 pb-3">
                        <div className="mb-2 px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8">
                            {/* Brand Section */}
                            <div className="flex items-center gap-2 px-1 py-3">
                                <FcBullish fontSize={24} />
                                <span className="text-cyan-900 text-lg">Vishal</span>
                            </div>

                            {/* Sidebar Links */}
                            <div className="py-4 flex flex-col gap-1">
                                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                                    <SidebarLink key={item.key} item={item} />
                                ))}
                            </div>

                            {/* Bottom Section Links */}
                            <div className="flex flex-col gap-1 pt-4 border-t border-neutral-300 mt-60">
                                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                                    <SidebarLink key={item.key} item={item} />
                                ))}

                                {/* Logout Section */}
                                <div className="flex items-center gap-2 px-1 py-3 cursor-pointer">
                                    <HiOutlineLogout className="text-xl ml-4" />
                                    <Link to="/login" className="hover:underline">
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

// Sidebar Link Component
function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={item.path}
            className={classNames(
                'flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200',
                pathname === item.path ? 'bg-cyan-700 text-cyan-900' : 'text-neutral-400 hover:bg-neutral-200'
            )}
        >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
        </Link>
    )
}

// import classNames from "classnames";
// import React, { useState } from "react";
// import { FcBullish } from 'react-icons/fc';
// import { HiOutlineLogout } from "react-icons/hi";
// import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/consts/Navigation";
// import { Link, useLocation } from "react-router-dom";
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// const LinkClasses = 'flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-80 text-base';

// export default function Sidebar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <div className="bg-cyan-900 h-screen sm:w-60 md:w-60 w-16 p-3 flex flex-col text-gray-100 transition-all duration-300">
//             {/* Mobile screen menu toggle */}
//             <button
//                 className="block md:hidden ml-auto mb-4"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 {isMenuOpen ? <FaAngleLeft /> : <FaAngleRight />}
//             </button>

//             {/* Sidebar content */}
//             <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
//                 <div className="flex items-center gap-2 px-1 py-3">
//                     <FcBullish fontSize={24} />
//                     <span className="text-gray-100 text-lg">OpenShop</span>
//                 </div>

//                 <div className="flex-1 py-8 flex flex-col gap-0.5">
//                     {DASHBOARD_SIDEBAR_LINKS.map((item) => (
//                         <SidebarLink key={item.key} item={item} />
//                     ))}
//                 </div>

//                 <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700 mt-48">
//                     {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
//                         <SidebarLink key={item.key} item={item} />
//                     ))}

//                     <div className={classNames('text-red-500 cursor-pointer', LinkClasses)}>
//                         <span className="text-xl">
//                             <HiOutlineLogout />
//                         </span>
//                         <Link to='/login'>Logout</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function SidebarLink({ item }) {
//     const { pathname } = useLocation();

//     return (
//         <Link
//             to={item.path}
//             className={classNames(
//                 pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
//                 LinkClasses
//             )}
//         >
//             <span className="text-xl">{item.icon}</span>
//             {item.label}
//         </Link>
//     );
// }
