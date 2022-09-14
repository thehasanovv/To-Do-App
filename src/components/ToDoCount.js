import { useStateValue } from "../store/ToDoProvider";
import { toast } from "react-toastify";
import React from "react";

const ToDoCount = () => {
  const [state, dispatch] = useStateValue();
  console.log("re render to do count");

  const completedToDo = state.todo?.reduce((acc, item) => {
    if (item.completed) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const deleteHandler = () => {
    if (state.todo.length === 0) return;
    toast.success("Bütün tapşırıqlar silindi!");
    dispatch({ type: "DELETE_ALL_TO_DO" });
  };

  return (
    <>
      <div className="flex items-center px-5 h-[68px] w-full border-t border-[#E0E0E0] bg-white rounded-b-lg font-normal leading-3 text-[#858585] text-xs">
        <div>Ümumi {state.todo.length} tapşırıq</div>
        <div className="ml-4">Hazır {completedToDo} tapşırıq</div>
        <button className="ml-auto" onClick={deleteHandler}>
          Hamısını sil
        </button>
      </div>
    </>
  );
};

// export default ToDoCount;
export default React.memo(ToDoCount);
