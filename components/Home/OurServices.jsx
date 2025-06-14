"use client"
import React from "react";
import { TbBrandUnity } from "react-icons/tb";
import { ImAndroid } from "react-icons/im";
import { FaGooglePlay } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";


const services = [
    {
        id: 1,
        icon: <ImAndroid size={40} className="text-[#3535de]" />,
        title: "Android App Development",
        description:
            "Custom-built apps tailored for businesses, startups, and entrepreneurs. We handle UI/UX, backend development, APIs, and deployment on Google Play.",
    },
    {
        id: 2,
        icon: <TbBrandUnity size={40} className="text-[#3535de]" />,
        title: "Unity Game Development",
        description:
            "From hyper-casual to advanced multiplayer games, our Unity-powered solutions are optimized for performance, engagement, and revenue generation.",
    },
    {
        id: 3,
        icon: <FaGooglePlay size={40} className="text-[#3535de]" />,
        title: "Google Play Console Buy/Sell",
        description:
            "Need a verified Google Play Developer account? We offer secure transactions and complete transfer guidance for smooth ownership transitions.",
    },
    {
        id: 4,
        icon: <RiMegaphoneFill size={40} className="text-[#3535de]" />,
        title: "Android App Advertising",
        description:
            "Maximize earnings with our ad integration services. We specialize in AdMob, Unity Ads, and custom monetization strategies to drive higher revenue.",
    },
];

function OurServices() {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4 lg:my-10">
                {/* Heading Section */}
                <div className="text-center py-10">
                    <h3 className="text-[#3535de] font-semibold tracking-wide text-xl uppercase">
                        Our Services
                    </h3>
                    <h2 className="text-4xl md:text-5xl py-3 font-bold">
                        Take Your Business to the Next Level
                    </h2>
                    {/* <p className="text-[#c3c4c7] tracking-wider mx-auto max-w-[600px]">
                        Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus
                        morbi ut sed pellentesque elementum velit dictum.
                    </p> */}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-start space-y-3 p-6 rounded-lg shadow-lg bg-[#f9f9ff] transition-transform hover:scale-105"
                        >
                            {service.icon}
                            <h6 className="text-lg md:text-xl tracking-wider font-semibold text-black">
                                {service.title}
                            </h6>
                            <p className="text-[#4a4a68] tracking-wider">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurServices;

