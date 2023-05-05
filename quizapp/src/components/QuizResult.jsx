import React from "react";
import {
    Box, Button, Image
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
export const QuizResult = () => {
    const location = useLocation();
    return (
        <Box bg="#5d1c78">
            <h1>Result</h1>
            <Box bg="white">
                <Image margin="auto" src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/brainee/with_crown.png" />
            </Box>
            <Box className='show-score'>
                Your Score:{location.state.score}<br />
                Total Score:{location.state.totalScore}
            </Box>
        </Box>
    )
}