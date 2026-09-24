import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="max-w-360 mx-auto my-8 px-6 flex flex-row justify-between items-center py-2 bg-[#222630] border rounded-3xl">

            <div className="text-left lg:text-left px-6 py-9">

                <p className="font-inter text-[#ccff00]">
                    WORKOUT LIBRARY
                </p>

                <p className="font-oswald font-bold text-white text-[50px] max-w-3xl mx-auto lg:mx-0 my-7 leading-none tracking-[-0.02em]">
                    TRAIN WITH INTENT. LOG EVERY SET
                </p>

                <p className="font-inter text-[#9CA3AF] max-w-xl" >
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <div className="flex justify-center lg:justify-start gap-3 mt-7">

                    <button className="
                    bg-[#ccff00]
                    hover:bg-[#c2f106e1]
                    text-black
                    px-5
                    py-3
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    ">
                        BROWSE WORKOUTS
                    </button>

                </div>

            </div>

            <div className="mt-8 lg:mt-0">
                <Image
                    src="/banner.png"
                    alt="FitLog Logo"
                    width={450}
                    height={450}
                    className="object-contain"
                    priority
                />
            </div>

        </section>
    );
};

export default Banner;