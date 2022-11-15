import React from "react";
import { useParams } from "react-router-dom";
import Dummy from "../db/data.json";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const wordList = Dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
