import React, { useState } from "react";

const ProfileCard = ({ data, loading, deleteHandler, setedit }) => {
  const [open, setopen] = useState(false);

  if (loading) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="animate-spin"
        fill="none"
        height="56px"
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
    );
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
