import { useEffect, useState, useRef } from "react";

const Calendar: React.FC = () => {
  //USE-STATE
  const [calendarDays, setCalendarDays] = useState<(string | number)[]>([]);
  const [renderArray, setRenderArray] = useState<any>([]);
  const [initial, setInitial] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<number | number>();
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>();

  const [monthsArray] = useState<string[]>([
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
  ]);

  //USE-REF
  const ref_day = useRef<Array<HTMLButtonElement | null>>([]);

  //FUNCTIONS
  const getCalendarData = (month: number = new Date().getMonth()) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let d = new Date();
    const year = d.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const tempArray: any = [];
    let ctr = 1;
    for (let i = 0; i < paddingDays + parseInt(String(daysInMonth)); i++) {
      if (i < paddingDays) {
        tempArray.push("");
        continue;
      }

      tempArray.push(ctr);
      ctr++;
    }

    setCalendarDays(tempArray);
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  const handleDateSelect = (day: number) => {
    if (ref_day.current !== null) {
      console.log(day);
      ref_day.current[day]?.classList.toggle("selected_calendar");

      setSelectedDay(day);
    }
  };
  console.log(selectedDay); // remove this in the future, this is here to pass checks of unused states

  //USE-EFFECTS
  useEffect(() => {
    getCalendarData();
    setInitial(false);
  }, []);

  useEffect(() => {
    if (initial) return;
    const getDaysToRender = () => {
      let tempArray: any[] = [];
      let finalArray: any[] = [];
      for (let i = 1; i <= calendarDays.length; i++) {
        if (i % 7 === 0 && i !== 0) {
          tempArray.push(calendarDays[i - 1]);
          finalArray.push(tempArray);
          tempArray = [];
          continue;
        }
        if (i === calendarDays.length) {
          finalArray.push(tempArray);
        }
        tempArray.push(calendarDays[i - 1]);
      }

      setRenderArray(finalArray);
    };
    getDaysToRender();
  }, [calendarDays, initial]);

//   useEffect(() => {
//     if (initial) return;
//     console.log(renderArray.length);
    
//   }, [renderArray,initial]);

  return (
    <div className="w-full min-h-[20rem] relative flex flex-col">
      <div className="h-12 px-2 flex justify-between items-center ">
        <p className="text-accent font-medium">
          {monthsArray[selectedMonth]} {selectedYear}
        </p>

        <div className="">
          <button
            onClick={() => getCalendarData(selectedMonth - 1)}
            className="p-3 active:text-accent"
          >
            &lt;
          </button>
          <button
            onClick={() => getCalendarData(selectedMonth + 1)}
            className="p-3 active:text-accent"
          >
            &gt;
          </button>
        </div>
      </div>

      <table className=" w-full h-full text-center">
        <thead>
          <tr className="">
            <th className="w-10 h-10">Sun</th>
            <th className="w-10 h-10">Mon</th>
            <th className="w-10 h-10">Tue</th>
            <th className="w-10 h-10">Wed</th>
            <th className="w-10 h-10">Thu</th>
            <th className="w-10 h-10">Fri</th>
            <th className="w-10 h-10">Sat</th>
          </tr>
        </thead>
        <tbody>
          {renderArray.map((el: any) => {
            return (
              <tr className="">
                {el.map((box: any) => {
                  return (
                    <td>
                      <button
                        onClick={() => handleDateSelect(box)}
                        ref={(ell) => (ref_day.current[box] = ell)}
                        className="rounded-full w-10 h-10"
                      >
                        {box}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
