import ExerciseActions from '@/app/components/ExerciseActions';
import Image from 'next/image';

const ExerciseDetailPage = async ({ params }) => {

    const { exerciseId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${exerciseId}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch exercise');
    }

    const exercise = await res.json();

    const {
        name,
        image,
        muscleGroups,
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions
    } = exercise;

    return (
        <section className="max-w-360 mx-auto px-6 py-14">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                <div className="relative h-162.5 overflow-hidden rounded-3xl">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div>

                    <h1 className="font-oswald text-4xl font-bold uppercase text-white">
                        {name}
                    </h1>

                    <p className="mt-3 font-inter leading-7 text-[#9CA3AF]">
                        {description}
                    </p>

                    <div className="mt-5 flex gap-2">
                        {
                            muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#ccff00] px-4 py-1 text-xs font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))
                        }
                    </div>

                    <div className="mt-7 overflow-hidden rounded-2xl border border-[#252a31] bg-[#15181e]">

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Equipment
                            </span>

                            <span className="text-sm text-white">
                                {equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Difficulty
                            </span>

                            <span className="text-sm text-white">
                                {difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Sets
                            </span>

                            <span className="text-sm text-white">
                                {sets}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Reps
                            </span>

                            <span className="text-sm text-white">
                                {reps}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Duration
                            </span>

                            <span className="text-sm text-white">
                                {duration} min
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-[#252a31] px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Calories
                            </span>

                            <span className="text-sm text-white">
                                {caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between px-6 py-4">
                            <span className="text-sm font-semibold uppercase text-[#9CA3AF]">
                                Rating
                            </span>

                            <span className="text-sm text-white">
                                {rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-8">

                        <h2 className="font-oswald text-xl font-bold uppercase text-white">
                            Instructions
                        </h2>

                        <ol className="mt-4 list-decimal space-y-3 pl-5 font-inter text-sm leading-6 text-[#9CA3AF]">
                            {
                                instructions.map((instruction, index) => (
                                    <li key={index}>
                                        {instruction}
                                    </li>
                                ))
                            }
                        </ol>

                    </div>

                    <div className="mt-8 flex gap-4">

                        <ExerciseActions exercise={exercise} />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ExerciseDetailPage;