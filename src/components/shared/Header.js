import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar, selectSidebar } from '../../store/sidebarSlice';


export default function Header() {

    const dispatch = useDispatch()

    return (
        <header className="fixed w-full top-0 flex items-center bg-gray-0/80 p-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 z-[990] 2xl:py-5 3xl:px-8 4xl:px-10">
            <div className="flex w-full max-w-2xl items-center">
                {/* Sidebar Menu Button */}
                <button
                    className="rizzui-action-icon-root  inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded hover:text-primary focus-visible:ring-primary-lighter me-3 h-auto w-auto p-0 sm:me-4 laptop:hidden"
                    type="button"
                    aria-label="Open Sidebar Menu"
                    onClick={() => dispatch(toggleSidebar())}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        ></path>
                    </svg>
                </button>

                {/* Logo */}
                {/* <a
                    aria-label="Site Logo"
                    className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
                    href="/"
                > */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 26">
                        <rect
                            width="10.16"
                            height="19.93"
                            fill="currentColor"
                            rx="5.08"
                            transform="rotate(29.49 -5.18 20.77) skewX(.85)"
                        ></rect>
                        <rect
                            width="10.16"
                            height="25.62"
                            fill="currentColor"
                            rx="5.08"
                            transform="matrix(.87 .492 -.48 .878 27.17 0)"
                        ></rect>
                        <rect
                            width="10.16"
                            height="10.25"
                            fill="currentColor"
                            opacity=".5"
                            rx="5.08"
                            transform="rotate(29.49 -8.24 75.34) skewX(.85)"
                        ></rect>
                    </svg>
                 </a> */}

                {/* Search Button */}
                <button
                    aria-label="Search"
                    className="group lg:ml-[230px] inline-flex items-center focus:outline-none active:translate-y-px xl:h-10 xl:w-full xl:max-w-sm xl:rounded-lg xl:border xl:border-muted xl:py-2 xl:pe-2 xl:ps-3.5 xl:shadow-sm xl:backdrop-blur-md xl:transition-colors xl:duration-200 xl:hover:border-gray-900 md:hover:outline-double md:hover:outline-[0.5px] md:hover:outline-gray-900 md:focus-visible:border-gray-900 md:focus-visible:outline-double md:focus-visible:outline-[0.5px] md:focus-visible:outline-gray-900"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 256 256"
                        className="magnifying-glass me-2 h-[18px] w-[18px]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                    </svg>
                    <span className="placeholder-text hidden text-sm text-gray-600 group-hover:text-gray-900 lg:inline-flex">
                        Search your page...
                    </span>
                    <span className="search-command bg-cyan-900 ms-auto hidden items-center text-sm text-white lg:flex lg:rounded-md lg:bg-primary lg:px-1.5 lg:py-1 lg:text-xs lg:font-semibold lg:text-primary-foreground justify-normal">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="1.3"
                            viewBox="0 0 256 256"
                            className="h-[15px] w-[15px]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z"></path>
                        </svg>
                        K
                    </span>
                </button>
            </div>
            {/* Right-Side Icons */}
            <div className="ms-auto mobile:-ml-1 laptopL:ml-[600px] grid shrink-0 grid-cols-4 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
                {/* Notification Button */}
                <button
                    className="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-1 rounded hover:text-primary focus-visible:ring-primary-lighter relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
                    type="button"
                    aria-label="Notification"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="h-[18px] w-auto">
                        <path
                            className="fill-current opacity-40"
                            d="M16.5 8.162a.75.75 0 0 1-.75-.75 7.824 7.824 0 0 0-2.306-5.569.75.75 0 0 1 1.06-1.06 9.315 9.315 0 0 1 2.746 6.629.752.752 0 0 1-.75.75ZM1.5 8.162a.75.75 0 0 1-.751-.75c0-2.505.975-4.86 2.746-6.63a.751.751 0 0 1 1.061 1.06 7.824 7.824 0 0 0-2.306 5.57.75.75 0 0 1-.75.75Z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M16.034 12.684A5.025 5.025 0 0 1 14.25 8.84V6.75c0-2.64-1.96-4.824-4.5-5.19V.75a.75.75 0 1 0-1.5 0v.81c-2.54.366-4.5 2.55-4.5 5.19v2.091c0 1.484-.65 2.885-1.792 3.85a1.312 1.312 0 0 0 .854 2.31h12.375a1.314 1.314 0 0 0 .847-2.317Z"
                        ></path>
                        <path
                            className="fill-current opacity-40"
                            d="M9 18a2.816 2.816 0 0 0 2.755-2.25H6.245A2.816 2.816 0 0 0 9 18Z"
                        ></path>
                    </svg>
                    <span className="rizzui-badge-root flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-500 px-[5px] text-[10px] font-semibold text-white absolute -top-0.5 end-0 shadow-sm"></span>
                </button>

                {/* Theme Toggle Button */}
                <button
                    className="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-1 rounded hover:text-primary focus-visible:ring-primary-lighter relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
                    type="button"
                    aria-label="Messages"
                    aria-describedby=":r8:"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" fill="none" class="h-[18px] w-auto">
                        <path
                            class="fill-current opacity-40"
                            d="M16.172 5.313h-.375v3.562a3.19 3.19 0 0 1-3.187 3.188H3.798v1.687c0 1.137.925 2.062 2.062 2.062h.937V17.5a.562.562 0 0 0 .977.38l1.895-2.068h6.503a2.064 2.064 0 0 0 2.062-2.062V7.375a2.065 2.065 0 0 0-2.062-2.063Z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M12.61.813H1.734A1.69 1.69 0 0 0 .047 2.5v6.375c0 .93.757 1.688 1.688 1.688H12.61a1.69 1.69 0 0 0 1.688-1.688V2.5A1.691 1.691 0 0 0 12.609.812Zm.187 3.33L7.742 6.595a1.273 1.273 0 0 1-1.14 0L1.547 4.143V2.897L7.09 5.584c.053.03.112.03.165 0l5.543-2.686-.001 1.244Z"
                        ></path>
                    </svg>
                    <span className="rizzui-badge inline-flex items-center justify-center font-semibold leading-none color w-2 h-2 bg-green text-white rounded-full ring-2 ring-background absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2"></span>
                </button>
                <button
                    className="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-1 rounded hover:text-primary focus-visible:ring-primary-lighter relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9"
                    type="button"
                    aria-label="Settings"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.8"
                        stroke="currentColor"
                        class="h-[22px] w-auto animate-spin-slow"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="fill-current opacity-30"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        ></path>
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            className="fill-current"
                        ></path>
                    </svg>
                </button>
                <button className="w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10">
                    <img
                        src="https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo="
                        alt="V"
                        title="V"
                        draggable="false"
                        loading="lazy"
                        width="40"
                        height="40"
                        className="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10"
                        style={{ width: '40px', height: '40px', backgroundColor: 'rgb(171, 70, 210)' }}
                    />
                </button>
            </div>
        </header>
    )
}
