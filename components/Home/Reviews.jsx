

"use client";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { SiMaplibre } from "react-icons/si";

import Image from "next/image";
import StarIcon from "../comman/svg/StarIcon";
import { female, male, male1 } from "@/app/images";

const reviews = [
    {
        id: 1,
        name: "MATTHEW JOHNSON",
        // image: "https://websitedemos.net/digital-marketing-agency-04/wp-content/uploads/sites/865/2021/05/digital-marketing-agency-reviewer-img-1.jpg",
        image: male1,
        review: "\"Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing.\""

    },
    {
        id: 2,
        name: "LUIS CARLOZ",
        image: male,
        review:
            "\"Faucibus eget ullamcorper nascetur suapendisse purus nisi, sapien at id ipsum tincidunt quis sed fermentum risus, nibh tristique elit commando.\""
    },
    {
        id: 3,
        name: "ALICE MILES",
        image: female,
        review:
            "\"Malesuada nibh eu sed elit purus, sit sem molestie enim, egestas aliquet etiam donec tristique nec.\""
    },
];

const ratings = [
    {
        icon: <AiFillGoogleCircle />,
        rating: "4.8",
        reviews: "200+ Reviews",
    },
    {
        icon: <MdFacebook />,
        rating: "4.6",
        reviews: "400+ Reviews",
    },
    {
        icon: <SiMaplibre />,
        rating: "4.8",
        reviews: "100+ Reviews",
    },
    {

        icon: <StarIcon />,
        rating: "4.7",
        reviews: "200+ Reviews",
    },
];

function Reviews() {
    return (
        <div className="mt-30 ">
            <div className="relative bg-[#3535de] lg:py-0 lg:pb-16 md:py-14 py-24 flex flex-col justify-center items-center">
                {/* Review Stats Box */}
                <div className="absolute -top-28 lg:-top-24 md:-top-12 bg-white shadow-lg rounded-xl  border-2 border-[#3535de] p-6 w-[90%] max-w-screen-xl  mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center lg:py-10">
                        {ratings.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row text-center items-center gap-3 justify-center transform transition-transform duration-300"
                            >
                                {/* Icon */}
                                <div className="text-[#3535de] text-5xl md:mb-0 mb-2">{item.icon}</div>

                                {/* Rating & Reviews */}
                                <div>
                                    <div className="text-4xl font-bold text-black">{item.rating}</div>
                                    <p className="text-gray-500">{item.reviews}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-36 md:mt-16 mt-36 px-4 w-full md:container mx-auto">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-6 shadow-md rounded-lg text-center transition-all duration-300 hover:shadow-2xl"
                        >
                            {/* Stars */}
                            <div className="flex justify-start text-yellow-500 mb-3 space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 tracking-wider leading-relaxed text-left">{review.review}</p>

                            {/* User Info */}
                            <div className="flex items-center justify-start gap-3 mt-4">
                                <Image
                                    src={review.image}
                                    alt="Reviewer Image"
                                    width={50}
                                    height={50}
                                    className="rounded-full border border-gray-300"
                                />
                                <span className="tracking-wider font-semibold text-gray-800">{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
