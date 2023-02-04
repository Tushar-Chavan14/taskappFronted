import React, { useContext } from "react";
import { UiContext } from "../../context/UiContext";
import useFetchWIthAuth from "../../hooks/useFetchWithAuth";

const Taskcard = ({ _id, completed, description }) => {
  const { data, request } = useFetchWIthAuth();
  const { setTaskChange, setupdate, setid, setUdescription } =
    useContext(UiContext);

  async function completeTaskHandler(e, id, Taskcompleted) {
    e.preventDefault();
    await request(`/tasks/${id}`, "patch", {
      completed: !Taskcompleted,
    });
  }

  const taskDeleteHandler = async (e, id) => {
    e.preventDefault();
    await request(`/tasks/${id}`, "delete", {}, "Task Deleted");
    setTaskChange((prev) => !prev);
  };

  return (
    <div className=" bg-blueGrey w-[45rem] rounded">
      <div className="h-16 flex justify-around items-center">
        {completed || (data && data.completed) ? (
          <del className="text-xl">{description}</del>
        ) : (
          <p className="text-xl">{description}</p>
        )}
        <div className="flex gap-8 items-center">
          <button
            onClick={(e) => {
              completeTaskHandler(e, _id, completed);
            }}
            disabled={completed || (data && data.completed)}
          >
            <svg
              width="40px"
              height="40px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              stroke="#2ec27e"
            >
              <g id="SVGRepo_bgCarrier" />
              <g id="SVGRepo_tracerCarrier" />
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.4"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#2ec27e"
                />
                <path
                  d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  fill="#2ec27e"
                />
              </g>
            </svg>
          </button>
          <button
            onClick={() => {
              setupdate((prev) => !prev);
              setid(_id);
              setUdescription(description);
            }}
          >
            <svg version="1.1" viewBox="0 0 16 16" width="27px" height="27px">
              <path d="M2.453,9.297C1.754,9.996,1,13.703,1,14c0,0.521,0.406,1,1,1c0.297,0,4.004-0.754,4.703-1.453l5.722-5.722l-4.25-4.25  L2.453,9.297z M12,1c-0.602,0-1.449,0.199-2.141,0.891L9.575,2.175l4.25,4.25l0.284-0.284C14.746,5.504,15,4.695,15,4  C15,2.343,13.656,1,12,1z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              taskDeleteHandler(e, _id);
            }}
          >
            <svg viewBox="0 0 20 20" width="26px" height="26px">
              <path
                d="m6 2 2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
                fill="#fa2f2f"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Taskcard;
