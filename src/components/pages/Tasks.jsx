import React, { useContext, useEffect } from "react";
import { UiContext } from "../../context/UiContext";
import useFetchWIthAuth from "../../hooks/useFetchWithAuth";
import Navbar from "../navbar/Navbar";
import AddTask from "../task/AddTask";
import Taskcard from "../task/Taskcard";
import UpdateTask from "../task/UpdateTask";

const Tasks = () => {
  const { TaskChange, update } = useContext(UiContext);
  const { request, isLoading, data } = useFetchWIthAuth();

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      (async () => {
        await request("/tasks?limit=6&sortBy=createdAt_desc", "get");
      })();
    }

    return () => {
      subscribe = false;
    };
  }, [TaskChange]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-20">
        <div className="mt-14">
          <div className="flex justify-center">
            {update ? <UpdateTask /> : <AddTask />}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {isLoading ? (
            <div className="bg-blueGrey w-[45rem] h-16 rounded flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="animate-spin"
                fill="none"
                height="46px"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#000000"
                />
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="#000000"
                />
              </svg>
            </div>
          ) : (
            data &&
            data.map((task) => (
              <Taskcard
                key={task._id}
                _id={task._id}
                description={task.description}
                completed={task.completed}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
