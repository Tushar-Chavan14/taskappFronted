import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../components/pages/login";
import Registration from "../components/pages/Registration";
import Tasks from "../components/pages/Tasks";
import Authprovider, { Authcontext } from "../context/Authprovider";
import Protected from "./ProtectedRoute";
import ProtecForAuthen from "./ProtecForAuthen";
import Profile from "../components/pages/Profile";
import { useContext } from "react";

const RoutePaths = () => {
  const { auth } = useContext(Authcontext);

  return (
    <Authprovider>
      <Routes>
        <Route
          path="/"
          element={
            auth ? <Navigate to={"/tasks"} /> : <Navigate to={"/login"} />
          }
        />

        <Route
          path="/login"
          element={
            <ProtecForAuthen>
              <Login />
            </ProtecForAuthen>
          }
        />
        <Route
          path="/register"
          element={
            <ProtecForAuthen>
              <Registration />
            </ProtecForAuthen>
          }
        />

        <Route
          path="/tasks"
          element={
            <Protected>
              <Tasks />
            </Protected>
          }
        />

        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </Authprovider>
  );
};

export default RoutePaths;
