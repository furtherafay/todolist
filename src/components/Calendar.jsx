import { useState } from "react";

export const Calendar = () => {
  const [days, setDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]);

  return (
    <>
      <div className="flex flex-col ml-2 mr-2 mt-2 w-[90%] h-26 border border-black rounded-md">
        <h1 className="text-2xl font-mono font-bold ml-2">Today, July 21st</h1>
        <div className="flex flex-row justify-around font-mono ml-2 mt-6">
          {days.map((d) => (
            <div className="flex justify-center items-center w-[10%] h-full border border-black rounded-md">{d}</div>
          ))}
        </div>
      </div>
    </>
  );
};
