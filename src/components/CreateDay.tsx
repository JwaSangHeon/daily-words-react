import React from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import { IDay } from "./DayList";

const CreateDay = () => {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  const addDay = () => {
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가되었습니다.");
        navigate(`/`);
      }
    });
  };
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
};

export default CreateDay;
