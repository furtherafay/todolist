import { useEffect, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";

export const CalendarCard = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [date, setDate] = useState(today.getDate());
  const [day, setDay] = useState(today.getDay());
  const [selectedIndex, setSelectedIndex] = useState(today.getDay());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const handleCalendarOpen = () => {
    setCalendarIsOpen(!calendarIsOpen);
  };

  const getDate = () => {
    return `${days[day]}, ${months[month]} ${date}`;
  };

  const handleChangeDate = (index) => {
    setSelectedIndex(index);

    const clickDiff = index - day;

    const newDateObj = new Date(today);
    newDateObj.setDate(date + clickDiff);

    setDate(newDateObj.getDate());
    setMonth(newDateObj.getMonth());
    setDay(newDateObj.getDay());
  };

  return (
    <>
      <div className="flex flex-col ml-2 mr-2 mt-2 w-[90%] h-28 border border-black rounded-md">
        <div className="flex">
          <h1 className="text-2xl font-mono font-bold ml-2">{getDate()}</h1>
          <CalendarIcon
            onClick={handleCalendarOpen}
            className="mt-1 ml-2"
          ></CalendarIcon>
        </div>
        <div className="flex flex-row justify-around font-mono ml-2 mt-6">
          {days.map((d, index) => (
            <div
              key={d}
              onClick={() => handleChangeDate(index)}
              className={`select-none p-2 cursor-pointer flex justify-center items-center w-[10%] h-full border border-black rounded-md
              ${
                selectedIndex === index
                  ? "bg-muted-foreground"
                  : "hover:bg-muted-foreground"
              }
              `}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
