import React, { useEffect, useState } from "react";
import {
    Box
} from "@chakra-ui/react";
import { QuizResult } from "./QuizResult"
import { QuizData } from './Data/QuizData'
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const navigate = useNavigate();
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => {
                if (timer === 0) {
                    changeQuestion();
                    return 60;
                } else {
                    return timer - 1;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setTimer(60);
        } else {
            navigate('/quizresult', {
                state: {
                    score: score,
                    totalScore: QuizData.length,
                }
            });
        }
    };
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    return (
        <Box>
            <p className="heading-txt">Quiz APP</p>
            <Box className="container">
                <Box>
                    <h3>{currentQuestion + 1}</h3>
                    <h5>Timer: {formatTime(timer)}</h5>
                </Box>
                <Box className="question">
                    <span id="question-number">{currentQuestion + 1}. </span>
                    <span id="question-txt">{QuizData[currentQuestion].question}</span>
                </Box>
                <Box className="option-container">
                    {QuizData[currentQuestion].options.map((option, i) => {
                        return (
                            <button
                                // className="option-btn"
                                className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                    }`}
                                key={i}
                                onClick={() => setClickedOption(i + 1)}
                            >
                                {option}
                            </button>
                        )
                    })}
                </Box>
                <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
            </Box>
        </Box>
    )
}