'use client';

import { createContext, useState } from 'react';

export const WorkoutContext = createContext(null);

const WorkoutProvider = ({ children }) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);


    const addToPlan = (exercise) => {

        setTodayPlan((previousPlan) => {

            const alreadyExists = previousPlan.some(
                (item) => item.id === exercise.id
            );

            if (alreadyExists) {
                return previousPlan;
            }

            return [...previousPlan, exercise];
        });
    };


    const addToSaved = (exercise) => {

        setSavedWorkouts((previousSaved) => {

            const alreadyExists = previousSaved.some(
                (item) => item.id === exercise.id
            );

            if (alreadyExists) {
                return previousSaved;
            }

            return [...previousSaved, exercise];
        });
    };


    const planInfo = {
        todayPlan,
        savedWorkouts,
        addToPlan,
        addToSaved
    };


    return (
        <WorkoutContext.Provider value={planInfo}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;