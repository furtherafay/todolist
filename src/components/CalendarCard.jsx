import { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import { Button } from "./ui/button";

const initialDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export const CalendarCard = () => {
  const [days, setDays] = useState(initialDays);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [date, setDate] = useState(today.getDate());
  const [day, setDay] = useState(today.getDay());
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedIndex, setSelectedIndex] = useState(today.getDay());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target))
        setCalendarIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCalendarOpen = () => {
    setCalendarIsOpen(!calendarIsOpen);
  };

  const handleDatetoToday = () => {
    const todayDate = new Date();
    setCurrentDate(todayDate);

    setDay(todayDate.getDay());
    setMonth(todayDate.getMonth());
    setDate(todayDate.getDate());
    setSelectedIndex(todayDate.getDay());
    setDays([...initialDays]);
  };

  const getDate = () => {
    return `${days[day]}, ${months[month]} ${date}`;
  };

  const handleChangeDate = (index) => {
    setSelectedIndex(index);

    const clickDiff = index - day;

    const newDateObj = new Date(today);
    newDateObj.setMonth(month);
    newDateObj.setDate(date + clickDiff);

    setDate(newDateObj.getDate());
    setMonth(newDateObj.getMonth());
    setDay(newDateObj.getDay());
  };

  const handleLeftArrow = () => {
    setDays((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      setMonth(newDate.getMonth());
      setDate(newDate.getDate());
      return newDate;
    });
  };

  const handleRightArrow = () => {
    setDays((prev) => [...prev.slice(1), prev[0]]);
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      setMonth(newDate.getMonth());
      setDate(newDate.getDate());
      return newDate;
    });
  };

  return (
    <>
      <div className="p-2 shadow-xl flex flex-col ml-2 mr-2 mt-2 w-[90%] min-h-32 rounded-md">
        <div className="flex justify-between">
          <div ref={calendarRef} className="flex flex-row relative">
            <h1 className="select-none text-2xl font-mono font-bold ml-2">{getDate()}</h1>
            <CalendarIcon
              onClick={handleCalendarOpen}
              className="mt-1 ml-2"
            ></CalendarIcon>
            {calendarIsOpen && (
              <CalendarPicker
                mode="single"
                selected={new Date(2025, month, date)}
                onSelect={(selected) => {
                  if (selected) {
                    setDays([...initialDays]);
                    setDate(selected.getDate());
                    setMonth(selected.getMonth());
                    setDay(selected.getDay());
                    setSelectedIndex(selected.getDay());
                    setCalendarIsOpen(false);

                    setCurrentDate(selected)
                  }
                }}
                className="rounded-lg border mt-8 md:mt-0 ml-4 md:ml-50 absolute"
              />
            )}
          </div>

          <Button onClick={handleDatetoToday} className="pointer-cursor select-none shadow-xl m-2">
            Today
          </Button>
        </div>

        <div className="flex flex-row justify-around font-mono ml-2 mt-6">
          {days.map((d, index) => (
            <div
              key={d}
              onClick={() => handleChangeDate(index)}
              className={`md:text-2xl font-bold shadow-xl select-none p-4 cursor-pointer flex justify-center items-center w-[10%] h-full rounded-md
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

        <div className="flex flex-row justify-between items-center mt-4 w-full h-8">
          <ArrowLeft onClick={handleLeftArrow} className="ml-4 md:ml-8"></ArrowLeft>
          <ArrowRight onClick={handleRightArrow} className="ml-4 md:mr-8"></ArrowRight>
        </div>
      </div>
    </>
  );
};
