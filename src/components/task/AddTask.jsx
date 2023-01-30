import React, { useState } from "react";
import { toast } from "react-toastify";
import useFetchWIthAuth from "../../hooks/useFetchWithAuth";

const AddTask = () => {
  const [description, setdescription] = useState("");

  const { request, data, isLoading } = useFetchWIthAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    const reqData = { description };
    await request("/tasks", "post", reqData);
    toast.success("task added");
    setdescription("");
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
        <button className=" bg-emerald-300 rounded-md px-4 h-12 hover:bg-green-200">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
