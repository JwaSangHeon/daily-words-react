import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

import { IDay } from "./DayList";

const CreateWord = () => {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoading && korRef.current && engRef.current && dayRef.current) {
      setIsLoading(true);

      const kor = korRef.current.value;
      const eng = engRef.current.value;
      const day = dayRef.current.value;
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kor,
          eng,
          day,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? "저장중..." : "저장"}
      </button>
    </form>
  );
};

export default CreateWord;
