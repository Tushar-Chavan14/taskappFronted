import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/Authprovider";
import useFetchWIthAuth from "../../hooks/useFetchWithAuth";
import ProfileCard from "../Profile/ProfileCard";
import Navbar from "../navbar/Navbar";
import EditProfile from "../Profile/EditProfile";
import { toast } from "react-toastify";

const Profile = () => {
  const { data, isLoading, request } = useFetchWIthAuth();

  const [edit, setedit] = useState(false);
  const [confirmPass, setconfirmPass] = useState("");
  const [updateUser, setupdateUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const { logout } = useContext(Authcontext);

  const editHandler = async (e) => {
    e.preventDefault();
    const isMatch = confirmPass === updateUser.password;
    if (!isMatch) {
      return toast.error("password dont match");
    }
    if (
      updateUser.name &&
      updateUser.age &&
      updateUser.email &&
      updateUser.password
    ) {
      await request("/users/me", "patch", updateUser, "Profile updated");
    } else {
      await request(
        "/users/me",
        "patch",
        {
          name: updateUser.name,
          emil: updateUser.email,
          age: updateUser.age,
        },
        "Profile updated"
      );
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const sure = confirm("Are you sure you want to delete your account?");
    if (sure) {
      logout();
      return await request("/users/me", "delete", null, "user deleted");
    }
  };

  useEffect(() => {
    (async () => {
      await request("/users/me", "get");
    })();

    return () => {};
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex h-[90vh] items-center justify-center">
        {edit ? (
          <EditProfile
            setedit={setedit}
            updateUser={updateUser}
            setupdateUser={setupdateUser}
            confirmPass={confirmPass}
            setconfirmPass={setconfirmPass}
            data={data}
            editHandler={editHandler}
          />
        ) : (
          <ProfileCard
            data={data}
            loading={isLoading}
            setedit={setedit}
            deleteHandler={deleteHandler}
          />
        )}
      </div>
    </>
  );
};

export default Profile;
