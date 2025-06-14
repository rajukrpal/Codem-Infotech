"use client"
import React from "react";
import { TbBrandUnity } from "react-icons/tb";
import { FaGooglePlay } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";



//  Data for Services
const services = [
    {
        id: 1,
        icon: <TbBrandUnity size={25} className="text-[#3535de]" />,
        title: "Unity Game Development",
        description: "immersive, and monetized game solutions.",
    },
    {
        id: 2,
        icon: <FaGooglePlay size={25} className="text-[#3535de]" />,
        title: "Google Play Console Buy/Sell",
        description: "Secure transactions for Play Console accounts.",
    },
    {
        id: 3,
        icon: <RiMegaphoneFill size={25} className="text-[#3535de]" />,
        title: "Android App Advertising",
        description: "Maximize revenue with effective ad strategies.",
    },
];

function WhatWeDo() {
    return (
        <div className="lg:py-16 pt-10">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:px-4">
                    <div className="md:col-span-3">
                        <div className="text-[#3535de] font-semibold tracking-wide text-xl uppercase ">
                            About
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        {/* <h2 className="text-3xl md:text-5xl w-full lg:w-[70%] leading-tight">
                            Full-service Internet Marketing Solutions
                        </h2> */}
                        <p className="text-[#c3c4c7] tracking-wider w-full lg:w-[80%] py-6 md:py- 8 font-thin capitalize">
                            At Codem Infotech, we bring ideas to life with cutting-edge mobile applications and gaming solutions. With expertise in Android, Unity, and Play Console services, we empower developers, startups, and businesses to reach their full potential.  <br /><br />
                            We focus on quality, security, and profitability, ensuring seamless app launches, monetization strategies, and game development.
                        </p>
                        <div className="h-[1px] w-full bg-[#0000ff2f]"></div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
                            {services.map((service) => (
                                <div key={service.id} className="flex flex-col items-start space-y-3">
                                    {service.icon}
                                    <h6 className="text-lg md:text-xl tracking-wider font-semibold text-black">
                                        {service.title}
                                    </h6>
                                    <p className="text-[#c3c4c7] tracking-wider capitalize">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
