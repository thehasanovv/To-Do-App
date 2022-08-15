import { useStateValue } from "../store/ToDoProvider";
import { toast } from "react-toastify";

const ToDoList = () => {
  const [state, dispatch] = useStateValue();

  const handleChange = (id, e) => {
    dispatch({ type: "TODO_CHECKED", payload: id });
  };

  const removeHandler = (id) => {
    toast.success("Tapşırıq silindi!");
    dispatch({
      type: "ROMOVE_TO_DO",
      payload: id,
    });
  };

  return (
    <>
      <div className="mt-5 w-full h-64 overflow-y-auto bg-white rounded-t-lg border-gray-300">
        {/* Empty div */}
        {state.todo.length === 0 && (
          <div className="flex justify-center items-center w-full h-full">
            <img src="./empty.svg " />
          </div>
        )}
        {/* Data map */}
        {state.todo.map((data) => (
          <div
            className="group flex items-center justify-between w-full px-5 min-h-[68px] text-sm text-gray-900 border-b border-[#E0E0E0]"
            key={data.id}
          >
            <div className="flex items-center ml-3 font-normal leading-4 text-[#414141] w-10/12">
              <input
                onChange={handleChange.bind(null, data.id)}
                type="checkbox"
                className="w-6 h-6 rounded-full mr-4"
              />
              <span
                className={`break-words w-full ${
                  data.completed && "line-through"
                }`}
              >
                {data.listItem}
              </span>
            </div>
            <button
              onClick={removeHandler.bind(null, data.id)}
              className="ml-auto text-red-400 text-sm cursor-pointer invisible group-hover:visible"
            >
              <img src="./delete-icon.svg" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
