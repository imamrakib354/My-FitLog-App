'use client';
import EmptyPlan from '../components/EmptyPlan';
import React, { useState } from 'react';
import useWorkout from '../hooks/useWorkout';
import Image from 'next/image';
import { Clock3, Flame, Star, X, Check } from "lucide-react";
import Link from 'next/link';


const MyPlan = () => {

    const [activeTab, setActiveTab] = useState("today");

    const { todayPlan, savedWorkouts, doneExercises, markAsDone, removeFromPlan, removeFromSaved } = useWorkout();

    const [sortBy, setSortBy] = useState("duration");

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

    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {

        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });


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
                            ? 'bg-[#252a31] text-[#ccff00]'
                            : 'text-[#9CA3AF]'
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-md px-5 py-2 text-sm ${activeTab === 'saved'
                            ? 'bg-[#252a31] text-[#ccff00]'
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
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
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
                sortedWorkouts.length === 0 ? (
                    <EmptyPlan />
                ) : (
                    <div className="mt-6 space-y-4">
                        {
                            sortedWorkouts.map((exercise) => {
                                const isDone = doneExercises.includes(exercise.id);
                                return (
                                    <div
                                        key={exercise.id}
                                        className="flex items-center justify-between rounded-xl border border-[#252a31] bg-[#15181e] lg:p-4 p-2"
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="relative h-17.5 w-27.5 shrink-0 overflow-hidden rounded-lg">
                                                <Image
                                                    src={exercise.image}
                                                    alt={exercise.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div>

                                                <p className="font-oswald text-xl font-bold uppercase text-white">
                                                    {exercise.name}
                                                </p>

                                                <p className="font-inter text-[11px] text-[#8A92A0]">
                                                    {exercise.equipment}
                                                </p>


                                                <div className="mt-2 flex items-center gap-3 text-[11px] text-[#D1D5DB]">

                                                    <div className="flex items-center gap-1">
                                                        <Clock3
                                                            size={12}
                                                            strokeWidth={2}
                                                            className="text-[#BFFF00]"
                                                        />

                                                        <span>
                                                            {exercise.duration} min
                                                        </span>
                                                    </div>


                                                    <div className="flex items-center gap-1">
                                                        <Flame
                                                            size={12}
                                                            strokeWidth={2}
                                                            className="text-[#BFFF00]"
                                                        />

                                                        <span>
                                                            {exercise.caloriesBurned} kcal
                                                        </span>
                                                    </div>


                                                    <div className="flex items-center gap-1">
                                                        <Star
                                                            size={12}
                                                            strokeWidth={2}
                                                            className="text-[#BFFF00]"
                                                        />

                                                        <span>
                                                            {exercise.rating}
                                                        </span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-3">

                                            <div className='flex lg:flex-row flex-col gap-2'>
                                                <Link
                                                    href={`/Exercise/${exercise.id}`}
                                                    className="rounded-full border border-[#3A414D] px-5 lg:py-2 py-1 text-sm text-white hover:bg-[#151313e1]"
                                                >
                                                    View Details
                                                </Link>

                                                {activeTab === "today" && (
                                                    <button
                                                        onClick={() => markAsDone(exercise.id)}
                                                        className="flex items-center gap-2 rounded-full bg-[#ccff00] px-5 lg:py-2 py-1 text-sm font-semibold text-black hover:bg-[#c2f106e1]"
                                                    >
                                                        <Check size={16} />
                                                        {isDone ? "Marked as Done" : "Mark as Done"}
                                                    </button>
                                                )}

                                            </div>

                                            <button
                                                onClick={() => {
                                                    if (activeTab === "today") {
                                                        removeFromPlan(exercise.id);
                                                    } else {
                                                        removeFromSaved(exercise.id);
                                                    }
                                                }}
                                                className="text-[#8A92A0] hover:text-white">
                                                <X size={18} />
                                            </button>

                                        </div>

                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
        </section>
    );
};

export default MyPlan;