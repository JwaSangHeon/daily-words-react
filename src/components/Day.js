import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import Word from "./Word";

const Day = () => {
  const { day } = useParams();

  const wordList = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {wordList.length === 0 && <span>loading....</span>}
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
