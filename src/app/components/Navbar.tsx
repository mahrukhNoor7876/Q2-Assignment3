'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div>
            <nav>
                <div className="flex flex-row h-[50px] w-full bg-blue-900">
                    <h1 className="text-4xl text-white p-[5px] pl-[50px] pr-[50px] font-bold text-blink">Educator</h1>
                    <ul className="flex flex-row text-[20px] text-white ml-auto hidden lg:flex">
                        <li className="p-[10px] mr-[50px] hover:bg-blue-800">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:bg-blue-800">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:bg-blue-800">
                            <Link href="/services">Courses</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:bg-blue-800">
                            <Link href="/services">Blog</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:bg-blue-800">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Mobile Devices */}
                    <div className="block lg:hidden ml-auto pt-[10px] pr-[10px] z-10 cursor-pointer" onClick={handleNav}>
                        {nav ? <FontAwesomeIcon icon={faXmark} className="h-9 w-9 text-white"/> : <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-white"/>}
                    </div>
                </div>
                {/* Mobile Devices */}
                <div className={nav ? "lg:hidden absolute bg-gray-500 left-0 h-screen w-full ease-in duration-300" : "lg:hidden absolute  left-[-100%] h-screen w-full bg-gray-500 ease-in duration-300"}>
                    <ul className="text-[20px] text-white pl-[50px] text-center">
                        <li className="p-[10px] pt-[50px] mr-[50px] hover:text-blue-800">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-800">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-800">
                            <Link href="/services">Courses</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-800">
                            <Link href="/services">Blog</Link>
                        </li>
                        <li className="p-[10px] mr-[50px] hover:text-blue-800">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}