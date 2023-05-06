import React from "react";
import {
    Box, Button, Image, Text
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import "../components/Styles/quizresult.css"

export const QuizResult = () => {
    const location = useLocation();
    const percent = (location.state.score / 5) * 100
    return (
        <Box bg="#5d1c78" height='650px'>
            <h1 style={{ marginBottom: "40px", color: "white", fontSize: "x-larger", fontWeight: "bolder" }}>Result</h1>
            <Box bg="white" borderRadius="50%" w='225px' m="auto">
                <Image margin="auto" src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/brainee/with_crown.png" />
            </Box>
            <div className="result-box">
                <Text className="result-box-text">You scored:</Text>
                <Text className="result-box-text">{percent}%</Text>
                <Text className="result-box-text" marginTop="10px">{location.state.score < 3 ? "oh Snap! You can do Better" : "Hurray! You aced it"}</Text>
                <Text className="result-box-text2">Success is not Final, Failure is not Fatal; It's the courage to continue that counts</Text>
            </div>
            <Box className='show-score' color="white" display="flex" justifyContent="space-between" margin="20px" marginTop="40px">
                <Box fontSize="25px" fontWeight="700">
                    <h3>Your Score</h3>
                    <h3>{location.state.score} / 5</h3>
                </Box>
                <Box fontSize="25px" fontWeight="700">
                    <h3>Total Time taken</h3>
                    <h3>{location.state.totalTime} secs</h3>
                </Box>
            </Box>
        </Box >
    )
}