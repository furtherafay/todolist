import React, { useEffect, useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { X } from "lucide-react";
import { Check } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    const newId = Math.max(...tasks.map((t) => t.id), 0) + 1;

    setTasks([...tasks, { id: newId, task: inputValue, isDone: false }]);
    setInputValue("");
  };

  const handleRemoveTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  const handleTaskDone = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, isDone: true } : t
    );
    setTasks(newTasks);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 flex flex-col items-center">
        <div className="w-full text-center mt-4 mb-4">
          <h1 className="text-white text-2xl font-bold">Your To-Do List</h1>
        </div>
        
        {/* div for input */}
        <div className="flex justify-center items-center">
          <Input
            value={inputValue}
            className="w-64"
            onChange={(e) => setInputValue(e.target.value)}
          ></Input>
          <Button onClick={handleAddTask} className={"ml-2"}>
            Add Task
          </Button>
        </div>

        {/* div for task*/}
        <div>
          {tasks.map((t) => (
            <div
              key={t.id}
              className="relative m-6 border border-black rounded-md flex justify-around items-center min-w-64 h-full"
            >
              {t.isDone && (
                <Check
                  onClick={() => handleTaskDone(t.id)}
                  className="border border-black rounded-full w-4 h-4 mr-2"
                />
              )}
              <span className={t.isDone ? "line-through text-gray-400" : ""}>
                {t.task}
              </span>
              <X
                onClick={() => handleRemoveTask(t.id)}
                className="w-4 h-4 ml-2 hover:opacity-50"
              />
              <Button
                onClick={() => handleTaskDone(t.id)}
                className="absolute top-0 right-0 transform translate-x-18 translate-y-[-6px]"
              >
                Done
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
