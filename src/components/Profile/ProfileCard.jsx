import React, { useState } from "react";

const ProfileCard = ({ data, loading, deleteHandler, setedit }) => {
  const [open, setopen] = useState(false);

  if (loading) {
    return <p>loading ...</p>;
  }

  return (
    <div className="w-full h-80 max-w-2xl rounded-lg shadow bg-gray-800 border-gray-700 text-slate-200 ">
      <div className="px-4 pt-4">
        <button
          className="inline-block text-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg text-sm p-1.5"
          onClick={() => {
            setopen((prev) => !prev);
          }}
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            !open ? "hidden" : ""
          } absolute text-base list-none divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li onClick={() => setedit((prev) => !prev)}>
              <span className="block px-4 cursor-pointer py-2 text-sm hover:bg-gray-600 text-gray-200 dark:hover:text-white">
                Edit
              </span>
            </li>
            <li onClick={deleteHandler}>
              <span className="block px-4 cursor-pointer py-2 text-sm text-red-600 hover:bg-gray-600">
                Delete
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center pb-10 mt-2">
        <div className=" w-full gap-14 text-xl  flex flex-col">
          <div className=" border-t border-b">
            <span className="relative left-44">Name </span>
            <span className=" relative left-[22rem]">{data && data.name}</span>
          </div>
          <div className="border-t border-b">
            <span className="relative left-44">Age</span>
            <span className="relative left-96">{data && data.age}</span>
          </div>
          <div className=" border-t border-b">
            <span className="relative left-44">Email</span>
            <span className="relative left-80">{data && data.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
