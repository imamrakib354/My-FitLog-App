import Link from "next/link";

const NotFound = () => {

    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

            <p className="font-oswald text-7xl font-bold text-[#ccff00]">
                404
            </p>

            <h1 className="mt-4 font-oswald text-3xl font-bold text-white">
                PAGE NOT FOUND
            </h1>

            <p className="mt-2 text-[#9CA3AF]">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#ccff00] px-6 py-3 font-semibold text-black"
            >
                Back to Workouts
            </Link>

        </section>
    );
};

export default NotFound;