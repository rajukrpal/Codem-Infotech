

import { AwardsFive, AwardsFour, AwardsOne, AwardsSeven, AwardsSix, AwardsThree, AwardsTwo } from '@/app/images';
import Image from 'next/image';
import React from 'react';

function Awards() {
    const awards = [AwardsOne, AwardsTwo, AwardsThree, AwardsFour, AwardsFive, AwardsSix, AwardsSeven];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Heading Section */}
            <div className="text-center pb-8">
                <h3 className="text-[#3535de] font-semibold tracking-wide text-xl uppercase">
                    Relation & Awards
                </h3>
            </div>

            {/* Awards Container */}
            <div className="flex flex-wrap justify-center gap-8">
                {awards.map((award, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.18)] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <Image src={award} alt={`Award ${index + 1}`} width={200} height={100} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Awards;






