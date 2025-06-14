
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { blacklogo, whitelogo } from '@/app/images'
import BtnNav from '../BtnNav/BtnNav';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = [
        { id: 1, pageName: 'home' },
        { id: 2, pageName: 'services' },
        { id: 3, pageName: 'about' },
    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        } else {
            console.error(`❌ Section with id '${id}' not found`);
        }
    };

    return (
        <div className='fixed top-3 left-0 w-full z-20 '>
            <div className='max-w-screen-2xl mx-auto px-2 border border-white/20 rounded-full bg-white/30 backdrop-blur-sm'>
                <div className='flex items-center justify-between py-2 px-2 sm:p-3'>
                    <div className='flex items-center gap-7 lg:gap-10'>
                        <div className='flex gap-2 items-center cursor-pointer' onClick={() => scrollToSection("home")}>
                            <Image
                                // src={whitelogo}
                                src="/HomeImg/whitelogo.png"
                                width={35}
                                height={35}
                                alt='whitelogo'
                                className='h-11 w-11 rounded-full'
                            />
                            <span className='font-semibold text-black md:text-2xl text-xl'><span className=''>Codem</span> Infotech</span>
                        </div>

                        <div className="lg:flex hidden items-center gap-1 lg:gap-2 text-sm">
                            {NavLinks.map(({ id, pageName }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(pageName)}
                                    className="font-semibold duration-75 text-black transition-all ease-in-out px-3 py-2 tracking-wider rounded-md flex items-center gap-1 capitalize cursor-pointer"
                                >
                                    {pageName}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:flex gap-6 items-center hidden">
                        <div onClick={() => scrollToSection("contact")}>
                            <BtnNav btn={"Contact"} />
                        </div>
                    </div>

                    <div className='lg:hidden'>
                        <HiOutlineMenuAlt3 className='sm:text-3xl text-2xl' onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            <div className={`lg:hidden block w-full`}>
                <div className={`${isOpen ? "w-full fixed h-screen top-0" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`flex flex-col top-0 h-screen transition-all duration-500 ease-in-out fixed w-full bg-white text-black ${isOpen ? "left-0" : "-left-full"} `}
                    >
                        <div className='p-1 py-2 pl-2 flex justify-between items-center border-b gradient-border'>
                            <div onClick={() => scrollToSection("home")} className="cursor-pointer">
                                <Image
                                    src={blacklogo}
                                    width={35}
                                    height={35}
                                    alt='zorium'
                                    className='h-11 w-11 rounded-full'
                                />
                            </div>
                            <div className='w-fit' onClick={() => setIsOpen(false)}>
                                <IoClose className='sm:text-3xl text-2xl' />
                            </div>
                        </div>

                        <div className='flex mt-2 flex-col font-DM-sans'>
                            {NavLinks.map(({ id, pageName }) => (
                                <div
                                    key={id}
                                    onClick={() => {
                                        scrollToSection(pageName);
                                        setIsOpen(false);
                                    }}
                                    className='text-lg font-bold pl-4 py-3 border-b border-[#C9C9C9] text-left capitalize'
                                >
                                    {pageName}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


