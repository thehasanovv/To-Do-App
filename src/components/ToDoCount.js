import { useStateValue } from "../store/ToDoProvider";

const ToDoCount = () => {
  const [state, dispatch] = useStateValue();

  const deleteHandler = () => {
    dispatch({ type: "DELETE_ALL_TO_DO" });
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 h-[68px] w-full border-t border-[#E0E0E0] bg-white rounded-b-lg font-normal leading-3 text-[#858585] text-xs">
        <div>Ümumi {state.todo.length} tapşırıq</div>
        <button onClick={deleteHandler}>Hamısını sil</button>
      </div>
    </>
  );
};

export default ToDoCount;
