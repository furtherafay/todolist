import React, { useEffect, useState } from "react";
import { CalendarCard } from "./components/CalendarCard";
import { AddTask } from "./components/AddTask";

function App() {
  return (
    <>
      <header className="mt-2 flex justify-center items-center flex-col">
        <h1 className="select-none mt-4 text-2xl font-mono">To-Do List By R</h1>
        <h2 className="select-none font-mono">Simple | Efficient | Clean</h2>
      </header>

      <div className="flex justify-center items-center">
        <CalendarCard></CalendarCard>
      </div>

      <div className="flex justify-center items-center">
        <AddTask></AddTask>
      </div>
    </>
  );
}

export default App;
