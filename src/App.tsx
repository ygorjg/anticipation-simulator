import Form from "./components/Form";
import Global from "./globalStyle/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <div className="App">
      <Global />
      <Form />
      <ToastContainer />
    </div>
  );
};

export default App;
