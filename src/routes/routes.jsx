import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../components/pages/login";
import Registration from "../components/pages/Registration";
import Tasks from "../components/pages/Tasks";
import Authprovider from "../context/Authprovider";
import Protected from "./ProtectedRoute";
import ProtecForAuthen from "./ProtecForAuthen";

const RoutePaths = () => {
  return (
    <Authprovider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

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
      </Routes>
    </Authprovider>
  );
};

export default RoutePaths;
