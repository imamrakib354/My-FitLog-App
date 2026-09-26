import React from 'react';
import ExerciseCard from './ExerciseCard';


const getData = async () => {

        const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

        if (!res.ok) {
            return [];
        }

        const data = await res.json();

        return data;
};


const WorkoutList = async () => {

    const exerciseData = await getData();

    if (exerciseData.length === 0) {

        return (

            <section className="max-w-360 mx-auto my-16 px-4 py-2 lg:px-6">

                <div className="rounded-xl border border-[#252a31] bg-[#15181e] p-10 text-center">

                    <p className="font-oswald text-2xl font-bold text-white">
                        WORKOUTS TEMPORARILY UNAVAILABLE
                    </p>

                    <p className="mt-2 text-[#9CA3AF]">
                        Please try again shortly.
                    </p>

                </div>

            </section>

        );
    }

    return (

        <section className="max-w-360 mx-auto my-16 px-4 py-2 lg:px-0">

            <p className="font-oswald text-center text-[30px] font-bold text-white lg:text-left">
                THE LIBRARY
            </p>

            <p className="mb-8 text-center font-inter text-[#9CA3AF] lg:text-left">
                Twelve lifts covering every muscle group
            </p>


            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

                {
                    exerciseData.map((exercise) => (

                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                        />

                    ))
                }

            </div>

        </section>

    );
};


export default WorkoutList;