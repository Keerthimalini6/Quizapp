import React from "react";
import {
    Box, Button
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
export const QuizResult = () => {
    const location = useLocation();
    return (
        <Box>
            <h1>Result</h1>
            <Box className='show-score'>
                Your Score:{location.state.score}<br />
                Total Score:{location.state.totalScore}
            </Box>
        </Box>
    )
}