import React, { useEffect, useState } from "react";
import {
    Box, Button
} from "@chakra-ui/react";
import { QuizData } from './Data/QuizData'
import { useNavigate } from "react-router-dom";
import "../components/Styles/quizpage.css"

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
        <Box style={{ position: 'relative', height: '600px', display: 'flex', flexDirection: 'column' }}>
            <Box className="container" >
                <p className="heading-txt" style={{ fontSize: "x-larger", fontWeight: "bolder", marginTop: "30px", color: '#15a465' }}>Quiz <span style={{ color: '#5d1c78' }}>APP</span></p>
                <Box className="timer-box">
                    <h3 style={{ color: '#15a465' }}>0{currentQuestion + 1} / <span style={{ color: '#5d1c78' }}>05</span></h3>
                    <h5 style={{ color: '#15a465' }}>Time left: {formatTime(timer)}</h5>
                </Box>
                <Box className="question">
                    <span id="question-txt">{QuizData[currentQuestion].question}</span>
                </Box>
            </Box>
            <Box className="option-container" style={{ marginTop: 'auto' }}>
                {QuizData[currentQuestion].options.map((option, i) => {
                    return (
                        <Button
                            className={`option-btn ${clickedOption === i + 1 ? "checked" : ""}`}
                            key={i}
                            onClick={() => setClickedOption(i + 1)}
                            style={{ backgroundColor: clickedOption === i + 1 ? "#5d1c78" : "white", color: clickedOption === i + 1 ? "white" : "black" }}
                        >
                            {option}
                        </Button>
                    )
                })}
                <Button onClick={changeQuestion} bg="#15a465" color="white" mr={3} w="30%" margin="auto">
                    Next
                </Button>
            </Box>
        </Box>
    )
}