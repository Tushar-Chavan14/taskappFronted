import React from "react";
import Navbar from "../navbar/Navbar";
import AddTask from "../task/AddTask";

const Tasks = () => {
  return (
    <>
      <Navbar />
      <div className="mt-14">
        <div className="flex justify-center">
          <AddTask />
        </div>
      </div>
    </>
  );
};

export default Tasks;
