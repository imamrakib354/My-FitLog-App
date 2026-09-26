'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useWorkout from '../hooks/useWorkout';


const Navbar = () => {

    const { todayPlan, savedWorkouts } = useWorkout();

    const pathname = usePathname();


    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={
                        pathname === "/" ? "bg-[#16220b] text-[#ccff00] rounded-full px-6 py-2" : "text-gray-400 px-6 py-2"
                    }
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    className={
                        pathname === "/my-plan" ? "bg-[#16220b] text-[#ccff00] rounded-full px-6 py-2" : "text-gray-400 px-6 py-2"
                    }
                >
                    My Plan
                </Link>
            </li>
        </>
    );


    return (

        <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#080a0d]">

            <div className="max-w-360 mx-auto px-4 py-3 lg:px-6">

                {/* ================= MOBILE NAVBAR ================= */}
                <div className="flex items-center lg:hidden">

                    <div className="flex flex-1 justify-start">

                        <div className="dropdown">

                            <button
                                tabIndex={0}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#252a31] bg-[#15181e] text-white"
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

                            </button>


                            <ul
                                tabIndex={0}
                                className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#252a31] bg-[#111418] p-2 shadow-xl"
                            >
                                {links}
                            </ul>

                        </div>

                    </div>

                    <Link
                        href="/"
                        className="flex flex-1 items-center justify-center gap-2"
                    >

                        <Image
                            src="/logo.png"
                            alt="FitLog Logo"
                            width={28}
                            height={28}
                            className="object-contain"
                            priority
                        />

                        <span className="font-oswald text-xl font-semibold text-white">
                            FITLOG
                        </span>

                    </Link>

                    <div className="flex flex-1 justify-end gap-2">

                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 text-gray-300"
                        >

                            <span className="hidden sm:inline">
                                Plan
                            </span>

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                                {todayPlan.length}
                            </span>

                        </Link>


                        <Link
                            href="/my-plan"
                            className="flex items-center gap-1 text-gray-400"
                        >

                            <span className="hidden sm:inline">
                                Saved
                            </span>

                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-600 text-white">
                                {savedWorkouts.length}
                            </span>

                        </Link>

                    </div>


                </div>



                {/* ================= DESKTOP NAVBAR ================= */}
                <div className="hidden items-center justify-between lg:flex">

                    <Link href="/" className="flex items-center gap-2" >

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

                    <ul className="menu menu-horizontal gap-2 text-base">
                        {links}
                    </ul>

                    <div className="flex items-center gap-7">

                        <Link href="/my-plan" className="flex items-center gap-3 text-gray-300" >

                            <span>
                                Plan
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                                {todayPlan.length}
                            </span>

                        </Link>


                        <Link href="/my-plan" className="flex items-center gap-3 text-gray-400" >

                            <span>
                                Saved
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-white">
                                {savedWorkouts.length}
                            </span>
                            
                        </Link>

                    </div>

                </div>

            </div>

        </nav>

    );
};


export default Navbar;