import RoutePaths from "./routes/routes";
import Authprovider from "./context/Authprovider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Authprovider>
        <RoutePaths />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </Authprovider>
    </>
  );
}

export default App;
