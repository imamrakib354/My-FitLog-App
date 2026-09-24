import Link from 'next/link';

const EmptyPlan = () => {
    return (
        <div className="mt-6 flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-[#252a31]">

            <h3 className="font-oswald text-white text-xl font-bold">
                NOTHING HERE YET
            </h3>

            <p className="mt-2 font-inter text-sm text-[#9CA3AF]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-5 rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyPlan;