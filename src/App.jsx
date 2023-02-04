import RoutePaths from "./routes/routes";
import Authprovider from "./context/Authprovider";
import { ToastContainer } from "react-toastify";
import UiContextProvider from "./context/UiContext";

function App() {
  return (
    <>
      <UiContextProvider>
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
      </UiContextProvider>
    </>
  );
}

export default App;
