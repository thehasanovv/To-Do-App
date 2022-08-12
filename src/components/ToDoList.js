import { useStateValue } from "../store/ToDoProvider";

const ToDoList = () => {
  const [state, dispatch] = useStateValue();

  const removeHandler = (id) => {
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
            className="flex items-center justify-between w-full px-5 min-h-[68px] text-sm text-gray-900 border-b border-[#E0E0E0]"
            key={data.id}
          >
            <div className="ml-3 font-normal leading-4 text-[#414141] break-words w-11/12">
              {data.listItem}
            </div>
            <button
              onClick={removeHandler.bind(null, data.id)}
              className="text-red-400 text-sm cursor-pointer"
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
