
"use client"
import { be, black, blacklogo, gmail, m, top, whatsapp, whitelogo } from "@/app/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiBasketball } from "react-icons/ci";
// import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



// const servicesList = ['SEO', 'Digital Marketing', 'Digital Strategy', 'CRO', 'Analytics'];
// const agencyList = ['About Us', 'Our Team', 'Careers', 'News & Blog', 'Contact Us'];


function Footer() {
    const [showButton, setShowButton] = useState(false);

    // Function to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setShowButton(true); 
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <footer className="lg:pt-28 pt-10 bg-white text-black">
            {/* <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
            <div className="container mx-auto px-6 md:flex justify-between gap-8 ">
                {/* Logo & Description */}
                <div className="md:w-[40%]">
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={black}
                            width={1000}
                            height={1000}
                            alt='zorium'
                            className='h-11 w-11 rounded-full cursor-pointer'
                        />
                        <span className='font-semibold text-black text-2xl'><span className=''>Codem</span> Infotech</span>
                    </div>
                    <p className="mt-4  text-[#76767f] tracking-wider !font-thin">
                        Your one-stop solution for Android App Development, Unity Game Development, Google Play Console Buy/Sell, and In-App Advertising.
                    </p>
                    {/* <div className="flex gap-5 pt-2 md:mt-0 mt-5">
                        <Image
                            src={m}
                            width={35}
                            height={35}
                            alt='zorium'
                            className='w-7 cursor-pointer'
                        />
                        <Image
                            src={be}
                            width={35}
                            height={35}
                            alt='zorium'
                            className='w-7 cursor-pointer'
                        />
                        <CiBasketball size={27} color="blue" className="cursor-pointer" />
                    </div> */}
                </div>


                {/* Services */}
                {/* <div>
                    <h2 className="lg:text-2xl text-lg font-">Services</h2>
                    <ul className="lg:mt-8 mt-4 space-y-1">
                        {servicesList.map((service) => (
                            <li key={service}>
                                <a href="#" className="text-[#26262c] hover:text-[#6e6edf] !font-thin">{service}</a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Agency */}
                {/* <div>
                    <h2 className="lg:text-2xl text-lg font-">Agency</h2>
                    <ul className="lg:mt-8 mt-4 space-y-1">
                        {agencyList.map((item) => (
                            <li className="" key={item}>
                                <a href="#" className="text-[#26262c] hover:text-[#6e6edf] !font-thin">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Contact Info */}
                <div className="md:mt-0 mt-5">
                    <h2 className="lg:text-2xl text-lg text-black ">Contact Info</h2>
                    <div className="mt-5 flex flex-col gap-3">
                        {/* WhatsApp Contact */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={whatsapp}
                                width={32}
                                height={32}
                                alt="WhatsApp"
                                className="h-6 w-6  cursor-pointer"
                            />
                            <Link
                                href="https://wa.me/918866211336"
                                target="_blank"
                                className="text-[#76767f] !font-thin cursor-pointer hover:text-[#25D366] transition"
                            >
                                +91 88662 11336
                            </Link>
                        </div>

                        {/* Email Contact */}
                        <div className="flex items-center gap-3  ">
                            <Image
                                src={gmail}
                                width={32}
                                height={32}
                                alt="Gmail"
                                className="h-5 w-5  cursor-pointer"
                            />
                            <a
                                href="mailto:codeminfotech@yahoo.com"
                                className="text-[#76767f] !font-thin cursor-pointer hover:text-[#7395f1] transition"
                            >
                                codeminfotech@yahoo.com
                            </a>
                        </div>
                    </div>


                </div>
            </div>

            {/* Below Footer Section */}
            <div className="border-t border-[#0000ff2f] mt-10 py-10 text-center  text-[#76767f]">
                <p>{String.fromCharCode(169)} {new Date().getFullYear()} Codem Infotech | Powered by Codem Infotech</p>
            </div>

            {showButton && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-8 rounded-full cursor-pointer transition-opacity duration-300"
                >
                    {/* <Image
                        src={top}
                        width={35}
                        height={35}
                        alt="Scroll to top"
                        className="cursor-pointer border"
                    /> */}

                    {/* <IoIosArrowDropupCircle size={30} /> */}
                    {/* <div className="h-10 w-10 bg-[#0E1332]  text-white flex justify-center items-center border">
                        <IoIosArrowUp size={30} />

                    </div> */}
                    <div className="h-10 w-10 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.20)] text-[blue] flex justify-center items-center rounded-full">
                        <IoIosArrowUp size={30} />

                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;
