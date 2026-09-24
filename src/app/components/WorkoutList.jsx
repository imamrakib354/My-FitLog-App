import React from 'react';
import ExerciseCard from './ExerciseCard';

const getData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}


const WorkoutList = async () => {

    const exersiseData = await getData();
    return (
        <section className='max-w-360 mx-auto my-16 py-2'>

            <p className='font-oswald font-bold text-white text-[30px]'>
                THE LIBRARY
            </p>

            <p className='font-inter text-[#9CA3AF] mb-8'>
                Twelve lifts covering every muscle group
            </p>

            <div className="grid grid-cols-3 gap-4">
                {
                    exersiseData.map(exercise => <ExerciseCard key={exercise.id}
                        exercise={exercise}></ExerciseCard>)
                }

            </div>

        </section>
    );
};

export default WorkoutList;