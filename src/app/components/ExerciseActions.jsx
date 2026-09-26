'use client';
import { CalendarPlus, Bookmark } from "lucide-react";
import useWorkout from '../hooks/useWorkout';

const ExerciseActions = ({ exercise }) => {

    const { addToPlan, addToSaved } = useWorkout();

    return (
        <div className="flex gap-4 mt-6">

                <button
                    onClick={() => addToPlan(exercise)}
                    className="flex gap-2 rounded-lg bg-[#ccff00] px-5 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:-translate-z-1 hover:shadow-lg hover:bg-[#c2f106e1]"
                >
                    <CalendarPlus size={20} strokeWidth={2.5} />
                    Add to today&apos;s plan
                </button>

                <button
                    onClick={() => addToSaved(exercise)}
                    className=" flex gap-2 rounded-lg border border-[#3a414d] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:-translate-z-1 hover:shadow-lg hover:bg-[#151313e1]"
                >
                    <Bookmark size={20} strokeWidth={2} />
                    Save for later
                </button>
        </div>
    );
};

export default ExerciseActions;