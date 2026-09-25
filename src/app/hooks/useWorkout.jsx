'use client';

import { useContext, use } from 'react';
import { WorkoutContext } from '../WorkoutContext/WorkoutContext';

const useWorkout = () => {

    const workout = use(WorkoutContext);

    if (!workout) {
        throw new Error('usePlan must be used inside PlanProvider');
    }

    return workout;
};

export default useWorkout;