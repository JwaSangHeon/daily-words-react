import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DayList = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3001/days");
      setDays(data);
    };
    fetchData();
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
