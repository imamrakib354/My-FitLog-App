import React, { Suspense } from "react";
import Banner from "./components/Banner";
import WorkoutList from "./components/WorkoutList";

const Workout = () => {
  return (<>
    <Banner />

    <Suspense fallback={<WorkoutLoading />}>
      <WorkoutList />
    </Suspense>

  </>

  );
};

const WorkoutLoading = () => {

  return (
    <div className="max-w-360 mx-auto my-16 px-4 lg:px-6">

      <div className="flex min-h-60 items-center justify-center">

        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

      </div>

    </div>
  );
};

export default Workout;