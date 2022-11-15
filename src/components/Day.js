import React from "react";
import { useParams } from "react-router-dom";
import Dummy from "../db/data.json";

const Day = () => {
  const { day } = useParams();

  const wordList = Dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
