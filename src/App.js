import "./App.css";
import { ToDoProvider } from "./store/ToDoProvider";
import reducer, { initialState } from "./store/reducer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <ToDoProvider initialState={initialState} reducer={reducer}>
      <ToDoContainer />
    </ToDoProvider>
  );
}

export default App;
