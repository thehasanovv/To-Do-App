import ToDoAddBtn from "./ToDoAddBtn";
import ToDoList from "./ToDoList";
import ToDoCount from "./ToDoCount";

const ToDoContainer = () => {
  return (
    <div className="relative font-sans h-screen bg-gray-100">
      <img src="./background.png" className=" w-full" alt="background" />
      <div className="absolute top-16 w-[36rem] left-1/2 -translate-x-1/2">
        <ToDoAddBtn />
        <ToDoList />
        <ToDoCount />
      </div>
    </div>
  );
};

export default ToDoContainer;
