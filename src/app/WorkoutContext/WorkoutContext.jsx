'use client';
import { createContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const WorkoutContext = createContext(null);

const WorkoutProvider = ({ children }) => {

    const [todayPlan, setTodayPlan] = useState([]);

    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const [doneExercises, setDoneExercises] = useState([]);

    const [storageLoaded, setStorageLoaded] = useState(false);

    useEffect(() => {

        const storedPlan = localStorage.getItem("todayPlan");
        const storedSaved = localStorage.getItem("savedWorkouts");
        const storedDone = localStorage.getItem("doneExercises");


        if (storedPlan) {
            setTodayPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSavedWorkouts(JSON.parse(storedSaved));
        }

        if (storedDone) {
            setDoneExercises(JSON.parse(storedDone));
        }


        setStorageLoaded(true);

    }, []);

    useEffect(() => {

        if (!storageLoaded) {
            return;
        }

        localStorage.setItem(
            "todayPlan",
            JSON.stringify(todayPlan)
        );

        localStorage.setItem(
            "savedWorkouts",
            JSON.stringify(savedWorkouts)
        );

        localStorage.setItem(
            "doneExercises",
            JSON.stringify(doneExercises)
        );

    }, [
        todayPlan,
        savedWorkouts,
        doneExercises,
        storageLoaded
    ]);

    const addToPlan = (exercise) => {

        const alreadyExists = todayPlan.some(
            (item) => item.id === exercise.id
        );

        if (alreadyExists) {
            toast.info("Workout is already in today's plan");
            return;
        }

        if (todayPlan.length >= 5) {
            toast.info("Today's plan is full");
            return;
        }


        setTodayPlan((previousPlan) => [
            ...previousPlan,
            exercise
        ]);

        toast.success("Workout added to today's plan");
    };


    const addToSaved = (exercise) => {

        const alreadyExists = savedWorkouts.some(
            (item) => item.id === exercise.id
        );

        if (alreadyExists) {
            toast.info("Workout is already saved");
            return;
        }

        if (savedWorkouts.length >= 5) {
            toast.info("Saved workouts are full");
            return;
        }

        setSavedWorkouts((previousSaved) => [
            ...previousSaved,
            exercise
        ]);

        toast.success("Workout saved for later");
    };


    const markAsDone = (id) => {

        const alreadyMarked = doneExercises.includes(id);

        if (alreadyMarked) {
            toast.info("Workout is already marked as done");
            return;
        }

        setDoneExercises((previousDoneExercises) => [
            ...previousDoneExercises,
            id
        ]);

        toast.success("Workout marked as done");
    };

    const removeFromPlan = (id) => {

        setTodayPlan((previousPlan) =>
            previousPlan.filter(
                (exercise) => exercise.id !== id
            )
        );

        setDoneExercises((previousDoneExercises) =>
            previousDoneExercises.filter(
                (doneId) => doneId !== id
            )
        );

        toast.success("Workout removed from today's plan");
    };


    const removeFromSaved = (id) => {

        setSavedWorkouts((previousSaved) =>
            previousSaved.filter(
                (exercise) => exercise.id !== id
            )
        );

        toast.success("Workout removed from saved workouts");
    };


    const planInfo = {
        todayPlan,
        savedWorkouts,
        doneExercises,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone
    };


    return (
        <WorkoutContext.Provider value={planInfo}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="dark"
            />
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;