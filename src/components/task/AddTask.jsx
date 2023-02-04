import React, { useContext, useState } from "react";
import { UiContext } from "../../context/UiContext";
import useFetchWIthAuth from "../../hooks/useFetchWithAuth";

const AddTask = () => {
  const [description, setdescription] = useState("");
  const { setTaskChange } = useContext(UiContext);

  const { request, isLoading } = useFetchWIthAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    const reqData = { description };
    await request("/tasks", "post", reqData, "task added");
    setdescription("");
    setTaskChange((prev) => !prev);
  };

  return (
    <form
      className="flex items-center justify-evenly w-[45rem] rounded h-28 bg-blueGrey"
      onSubmit={submitHandler}
    >
      <div>
        <input
          type="text"
          className="h-14 w-96 rounded-md bg-gray-50/90 text-xl font-thin"
          style={{ paddingInline: "1rem" }}
          placeholder="Task description"
          required
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>
      <div>
        {isLoading ? (
          <button className="bg-emerald-300 rounded-md gap-4 px-4 w-40 h-12 hover:bg-green-200 flex items-center">
            <svg
              viewBox="0 0 24 24"
              className="animate-spin"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            loading...
          </button>
        ) : (
          <button className=" bg-emerald-300 rounded-md px-4 h-12 hover:bg-green-200">
            Add Task
          </button>
        )}
      </div>
    </form>
  );
};

export default AddTask;
