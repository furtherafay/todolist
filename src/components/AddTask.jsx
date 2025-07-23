import { Input } from "./ui/input";
import { Plus as AddBtn } from "lucide-react";

export const AddTask = () => {
  return (
    <>
      <div className="flex justify-center items-center w-[90%] min-h-12 mt-4 rounded-md">
        <Input
          type="text"
          placeholder="Add Task"
          className="w-[90%] md:w-[95%] text-center font-mono"
        ></Input>
        <AddBtn className="mt-1 mr-1 ml-auto"></AddBtn>
      </div>
    </>
  );
};
