import React, { useEffect, useState } from "react";
import { Calendar } from "./components/Calendar";

function App() {
  return (
    <>
      <header className="mt-2 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-mono">To-Do List By R</h1>
        <h2 className="font-mono">Simple | Effecient | Clean</h2>
      </header>

      <div className="flex justify-center items-center">
        <Calendar></Calendar>
      </div>
    </>
  );
}

export default App;
