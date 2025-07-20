import React, { useEffect, useState } from "react";
import { CalendarCard } from "./components/CalendarCard";

function App() {
  return (
    <>
      <header className="mt-2 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-mono">To-Do List By R</h1>
        <h2 className="font-mono">Simple | Efficient | Clean</h2>
      </header>

      <div className="flex justify-center items-center">
        <CalendarCard></CalendarCard>
      </div>
    </>
  );
}

export default App;
