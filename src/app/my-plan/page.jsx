'use client';
import EmptyPlan from '../components/EmptyPlan';
import React, { useState } from 'react';
import useWorkout from '../hooks/useWorkout';

const MyPlan = () => {

    const [activeTab, setActiveTab] = useState("today");

    const { todayPlan, savedWorkouts } = useWorkout();


    const currentWorkouts =
        activeTab === "today"
            ? todayPlan
            : savedWorkouts;


    const totalExercises = currentWorkouts.length;


    const totalMinutes = currentWorkouts.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = currentWorkouts.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );


    return (
        <section className='max-w-360 mx-auto px-6 pt-8 pb-4'>
            <p className='font-oswald text-3xl font-semibold text-white'>
                MY PLAN
            </p>
            <p className='font-inter text-[#8A92A0] mt-1'>
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <div className="mt-8 grid grid-cols-3 rounded-2xl border border-[#252a31] bg-[#15181e]">

                <div className="p-6">
                    <p className="text-sm text-[#9CA3AF] mb-1">
                        Exercises
                    </p>

                    <p className="font-oswald text-4xl font-bold text-[#ccff00]">
                        {totalExercises}
                    </p>
                </div>

                <div className="border-x border-[#252a31] p-6">
                    <p className="text-sm text-[#9CA3AF] mb-1">
                        Minutes
                    </p>

                    <p className="font-oswald text-4xl text-white font-bold">
                        {totalMinutes}
                    </p>
                </div>

                <div className="p-6">
                    <p className="text-sm text-[#9CA3AF] mb-1">
                        Calories
                    </p>

                    <p className="font-oswald text-4xl text-white font-bold">
                        {totalCalories}
                    </p>
                </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

                <div className="flex rounded-lg border border-[#252a31] bg-[#15181e] p-1">

                    <button
                        onClick={() => setActiveTab('today')}
                        className={`rounded-md px-5 py-2 text-sm ${activeTab === 'today'
                            ? 'bg-[#252a31] text-white'
                            : 'text-[#9CA3AF]'
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-md px-5 py-2 text-sm ${activeTab === 'saved'
                            ? 'bg-[#252a31] text-white'
                            : 'text-[#9CA3AF]'
                            }`}
                    >
                        Saved
                    </button>

                </div>


                <div className="flex items-center gap-3">

                    <span className="text-sm text-[#9CA3AF]">
                        Sort By
                    </span>

                    <select
                        className="rounded-lg border border-[#252a31] bg-[#15181e] px-4 py-2 text-sm text-white outline-none"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>

            </div>

            {
                currentWorkouts.length === 0 ? (

                    <EmptyPlan />

                ) : (

                    <div className="mt-6 space-y-3">

                        {
                            currentWorkouts.map((exercise) => (

                                <div
                                    key={exercise.id}
                                    className="rounded-xl border border-[#252a31] bg-[#15181e] p-4"
                                >
                                    <p className="font-oswald text-xl font-bold uppercase text-white">
                                        {exercise.name}
                                    </p>

                                    <p className="mt-1 text-sm text-[#9CA3AF]">
                                        {exercise.duration} min • {exercise.caloriesBurned} kcal • {exercise.rating}
                                    </p>
                                </div>

                            ))
                        }

                    </div>

                )
            }

        </section>
    );
};

export default MyPlan;