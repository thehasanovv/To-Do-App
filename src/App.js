import ToDoContainer from "./components/ToDoContainer";
import { ToDoProvider } from "./store/ToDoProvider";
import reducer, { initialState } from "./store/reducer";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ToDoProvider initialState={initialState} reducer={reducer}>
      <ToDoContainer />
      <ToastContainer />
    </ToDoProvider>
  );
}

export default App;
