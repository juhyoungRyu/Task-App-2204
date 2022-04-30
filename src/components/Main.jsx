import React, { useState, useEffect } from "react";
import "./Main.css";
import { Task } from "./Task";

export const Main = (props) => {
  const [rangeValue, setRangeValue] = useState("");
  const [taskValue, setTaskvalue] = useState("");
  const [dailyTask, setDailyTask] = useState(["기본값1", "기본값2"]);
  const [weeklyTask, setWeeklyTask] = useState([]);
  const [monthlyTask, setMonthlyTask] = useState([]);

  const changeRangeValue = (e) => {
    setRangeValue(e.target.value);
  };

  const changeTaskValue = (e) => {
    setTaskvalue(e.target.value);
  };

  const clickBtn = () => {
    if (taskValue === "") {
      alert("할 일을 써주세요!");
    } else if (rangeValue === "") {
      alert("언제까지 해야 할 일인지 써주세요!");
    } else {
      pushTask(rangeValue, taskValue);
      setRangeValue("");
      setTaskvalue("");
    }
  };

  const pushTask = (type, value) => {
    const range = {
      Daily: () => {
        let day = [...dailyTask];
        day.push(value);

        setDailyTask(day);
      },
      Weekly: () => {
        let week = [...weeklyTask];
        week.push(value);

        setWeeklyTask(week);
      },
      Monthly: () => {
        let month = [...monthlyTask];
        month.push(value);

        setMonthlyTask(month);
      },
    };
    return range[type]();
  };

  return (
    <div className="Main">
      <section className="main-menu">
        <input list="list" value={rangeValue} onChange={changeRangeValue} />
        <datalist id="list">
          <option value="Daily"></option>
          <option value="Weekly"></option>
          <option value="Monthly"></option>
        </datalist>
        <input type="text" value={taskValue} onChange={changeTaskValue} />
        <input type="submit" value="입력" onClick={clickBtn} />
      </section>
      <section className="all-daily">
        <Task
          color={"rgb(134 148 159)"}
          width={30}
          height={50}
          task={dailyTask}
          taskSet={setDailyTask}
        />
      </section>
      <section className="all-other">
        <Task
          color={"rgb(254 204 94)"}
          width={30}
          height={45}
          task={weeklyTask}
          taskSet={setWeeklyTask}
        />
        <Task
          color={"rgb(138 189 203)"}
          width={30}
          height={20}
          task={monthlyTask}
          taskSet={setMonthlyTask}
        />
      </section>
    </div>
  );
};
