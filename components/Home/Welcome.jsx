

"use client";
import React from "react";

function Welcome() {
    return (
        <div className="relative h-screen bg-[#363659] text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url("https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-hero-img-bg.jpg")`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6  container mx-auto">
                <p className="text-sm uppercase tracking-widest opacity-80 py-10">
                    Welcome to Codem Infotech
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium lg:leading-[90px] leading-16 mt-2">
                    Get in Touch <br /> to scale your <br /> business with us!
                </h1>
                <p className="text-lg    opacity-80 mt-4 max-w-[500px] tracking-wider text-white capitalize">
                    {/* Sollicitudin eros nulla mus donec a quisque convallis integer condimentum volutpat felis sed aliquet netus dolor dictumst pellentesque. */}
                    your one-stop solution for Android App Development, Unity Game Development, Google Play Console Buy/Sell, and In-App Advertising. We specialize in creating innovative digital experiences that drive growth and success.
                </p>

            </div>

            {/* Blue Gradient Shape (Fixed for Responsiveness) */}
            <div className="absolute md:-bottom-80 md:-right-[550px] -bottom-[600px] -right-96 w-[100%] md:w-[150vh] h-[100%] bg-[#3737e283] opacity-80 clip-path-custom -rotate-45 overflow-hidden"></div>
        </div>
    );
}

export default Welcome;
