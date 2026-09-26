import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExerciseCard = ({ exercise }) => {

    const {
        name,
        image,
        muscleGroups,
        equipment,
        duration,
        caloriesBurned,
        rating
    } = exercise;

    return (
        <Link href={`/Exercise/${exercise.id}`}>

            <div className=" mx-4 lg:mx-0 overflow-hidden rounded-2xl border border-[#252a31] bg-[#15181e] transition-all duration-300 hover:-translate-y-2 hover:-translate-z-1 hover:shadow-lg">

                <div className="relative h-55 w-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-6">

                    <div className="mb-4 flex gap-2">
                        {
                            muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black uppercase"
                                >
                                    {muscle}
                                </span>
                            ))
                        }
                    </div>

                    <h3 className="font-oswald text-xl font-bold uppercase text-white">
                        {name}
                    </h3>

                    <p className="mt-1 font-inter text-sm text-[#9CA3AF]">
                        {equipment}
                    </p>

                    <div className="mt-4 flex items-center gap-5 border-t border-[#252a31] pt-4 text-sm text-[#9CA3AF]">

                        <span>
                            ◷ {duration} min
                        </span>

                        <span>
                            ♨ {caloriesBurned} kcal
                        </span>

                        <span>
                            ☆ {rating}
                        </span>

                    </div>

                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;