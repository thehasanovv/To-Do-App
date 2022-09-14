import { useState } from "react";
import { nanoid } from "nanoid";
import { useStateValue } from "../store/ToDoProvider";
import { toast } from "react-toastify";

const ToDoAddBtn = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useStateValue();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue) {
      dispatch({ type: "IS_ERR_MSG", payload: true });
      toast.error("Xana boşdur!");
      return;
    }
    dispatch({ type: "IS_ERR_MSG", payload: false });
    dispatch({
      type: "ADD_TO_DO",
      payload: { id: nanoid(), listItem: inputValue, completed: false },
    });
    toast.success("Tapşırıq əlavə edildi!");
    setInputValue("");
  };

  return (
    <>
      {/* Todo Header */}
      <div className="uppercase text-white text-[50px] font-bold mb-4">
        Todo
      </div>
      {/* Todo ~ Add input & btn */}
      <div className="relative w-full">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          className={`block h-[68px] px-14 w-full font-normal leading-4 placeholder-[#CECECE] text-[#414141] bg-gray-50 rounded-lg border-gray-300 focus:border-[#00D1FF] ${
            state.errMessage && "border-red-500 focus:border-red-500"
          }`}
          placeholder="Tapşırığı daxil edin"
        />
        <button
          className="absolute right-2.5 bottom-3 cursor-pointer"
          onClick={handleSubmit}
        >
          <img src="./plus-icon.svg" alt="add button"/>
        </button>
      </div>
    </>
  );
};

export default ToDoAddBtn;
