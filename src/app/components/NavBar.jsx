'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();

    const links = (
        <>
            <li>
                <Link href="/" className={pathname === "/" ? "bg-[#16220b] text-[#ccff00] rounded-full px-6" : "text-gray-400 px-6"}>
                    Workouts
                </Link>
            </li>

            <li>
                <Link href="/my-plan" className={pathname === "/my-plan" ? "bg-[#16220b] text-[#ccff00] rounded-full px-6" : "text-gray-400 px-6"}>
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className="bg-[#080a0d] border-b border-gray-800">
            <div className="navbar max-w-360 mx-auto px-6 py-2">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content bg-[#111418] rounded-xl z-50 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="FitLog Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                            priority
                        />

                        <span className="font-oswald text-xl font-semibold text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 text-base">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-7">

                    <Link href="/my-plan" className="flex items-center gap-3 text-gray-300">
                        <span>Plan</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                            0
                        </span>
                    </Link>

                    <Link href="/my-plan" className="flex items-center gap-3 text-gray-400">
                        <span>Saved</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-white">
                            0
                        </span>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;