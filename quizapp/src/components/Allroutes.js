import React from "react";
import { Routes, Route } from "react-router-dom";
import {Quiz} from "./Quiz"
import { QuizPage } from "./QuizPage";
import { QuizResult } from "./QuizResult";


function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />}></Route>
      <Route path="/quizpage" element={<QuizPage />}></Route>
      <Route path="/quizresult" element={<QuizResult />}></Route>
    </Routes>
  );
}

export default Allroutes;
