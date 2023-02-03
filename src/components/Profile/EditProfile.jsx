import React from "react";

const EditProfile = ({
  setedit,
  updateUser,
  setupdateUser,
  confirmPass,
  setconfirmPass,
  data,
  editHandler,
}) => {
  return (
    <form
      className="w-full h-80 max-w-2xl border rounded-lg shadow bg-gray-800 border-gray-700"
      onSubmit={editHandler}
    >
      <div className="grid grid-cols-2 gap-6 w-[35rem] mx-auto mt-[10%]">
        <input
          type="text"
          className="p-2 rounded bg-slate-50/20 text-slate-100 placeholder:text-slate-100/90"
          placeholder={data && data.name}
          value={updateUser.name}
          onChange={(e) => {
            setupdateUser({ ...updateUser, name: e.target.value });
          }}
          required
        />
        <input
          type="number"
          className="p-2 rounded bg-slate-50/20 text-slate-100 placeholder:text-slate-100/90"
          placeholder={data && data.age}
          value={updateUser.age}
          onChange={(e) =>
            setupdateUser({ ...updateUser, age: e.target.value })
          }
          required
        />
        <input
          type="emial"
          className="p-2 rounded bg-slate-50/20 text-slate-100 placeholder:text-slate-100/90"
          placeholder={data && data.email}
          value={updateUser.email}
          onChange={(e) =>
            setupdateUser({ ...updateUser, email: e.target.value })
          }
          required
        />
        <input
          type="text"
          className="p-2 rounded bg-slate-50/20 text-slate-100 placeholder:text-slate-100/90"
          placeholder="Password"
          value={updateUser.password}
          onChange={(e) =>
            setupdateUser({ ...updateUser, password: e.target.value })
          }
        />
        <input
          type="password"
          className="p-2 rounded bg-slate-50/20 text-slate-100 placeholder:text-slate-100/90"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => {
            setconfirmPass(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center gap-8 w-full p-8">
        <button type="submit" className=" bg-green-400 rounded px-2 py-1">
          update
        </button>
        <button
          className=" bg-red-400 rounded px-2 py-1"
          onClick={() => setedit((prev) => !prev)}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
