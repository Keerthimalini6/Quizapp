import React, { useState } from "react";
import {
    Box, HStack, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Avatar,
    AvatarGroup,
} from "@chakra-ui/react";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { FaRegComment } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsPass } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Styles/quiz.css"

export const Quiz = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleClick = () => {
        setIsBookmarked(prevState => !prevState);
    };

    return (
        <Box className="main-box">
            <Box className="gif-box">
                <h1 style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        The <span style={{ color: '#15a465' }}>Daily</span>
                    </div>
                    <div>
                        <span style={{ color: '#15a465' }}>React</span> Quiz
                    </div>
                </h1>
                <Image className="gifvideo" src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" />
            </Box>
            <Box>
                <h1 style={{ textAlign: 'left', fontSize: "larger", fontWeight: "bolder", marginTop: "30px" }}>The Daily React Quiz</h1>

                <Box style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
                    <Box className="options-box">
                        <Box className="options">
                            <FaRegComment color="#5d1c78" />
                            <h3>Leave a comment</h3>
                        </Box>
                        <Box className="options">
                            {isBookmarked ? (
                                <BsBookmarkFill color="#5d1c78" onClick={handleClick} />
                            ) : (
                                <BsBookmark color="#5d1c78" onClick={handleClick} />
                            )}
                            <h3>Save a Quiz</h3>
                        </Box>
                        <Box className="options">
                            <GiCrossedSwords color="#5d1c78" />
                            <h3>Challenge a friend</h3>
                        </Box>
                    </Box>
                    <Box>
                        <AvatarGroup size="sm" max={3} textColor="#5d1c78">
                            <Avatar
                                name="Ryan Florence"
                                src="https://bit.ly/ryan-florence"
                            />
                            <Avatar
                                name="Segun Adebayo"
                                src="https://bit.ly/sage-adebayo"
                            />
                            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <Avatar
                                name="Prosper Otemuyiwa"
                                src="https://bit.ly/prosper-baba"
                            />
                            <Avatar
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                            <Avatar
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                            <Avatar
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                        </AvatarGroup>
                        <h3>are competing</h3>
                        <Box style={{ display: "flex", marginTop: "11px" }}>
                            <AiFillStar color="#5d1c78" />
                            <AiFillStar color="#5d1c78" />
                            <AiFillStar color="#5d1c78" />
                            <AiFillStar color="#5d1c78" />
                            <AiFillStar color="#5d1c78" />
                        </Box>
                        <p>4 Ratings (4.5)</p>
                    </Box>
                </Box>
                <h3 style={{ textAlign: "left", marginTop: "35px" }}>React quiz is an online test that evaluates your knowledge of React concepts. It usually includes multiple-choice questions that cover topics such as React components, JSX syntax, state and props, event handling, and lifecycle methods. The quiz may be timed, and your score is calculated based on the number of correct answers you provide.</h3>
                <Box style={{ marginTop: "25px", gap: "15px", display: "flex", flexDirection: "column" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <BsPass color="#15a465" />
                        <h3 style={{ marginLeft: "10px" }}>50% Passing Percentage</h3>
                    </Box>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <AiOutlineQuestionCircle color="#15a465" />
                        <h3 style={{ marginLeft: "10px" }}>5 Questions</h3>
                    </Box>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <IoIosTimer color="#15a465" />
                        <h3 style={{ marginLeft: "10px" }}>5 mins</h3>
                    </Box>
                </Box>
                <Button marginTop="8" bg="#5d1c78" color="white" onClick={onOpen}>Take Quiz</Button>
                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize="x-large" color="#5d1c78">Quiz <span style={{ color: '#15a465' }}>Rules</span></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <HStack>
                                <IoIosTimer color="#15a465" />
                                <Box>
                                    <h4 style={{ color: '#5d1c78' }}>5mins</h4>
                                    <h5>Keep in mind it's a time bound quiz</h5>
                                </Box>
                            </HStack>
                            <HStack>
                                <AiOutlineQuestionCircle color="#15a465" />
                                <Box>
                                    <h4 style={{ color: '#5d1c78' }}>5 Questions</h4>
                                    <h5>We believe that you will ace it</h5>
                                </Box>
                            </HStack>
                            <HStack>
                                <BsAward color="#15a465" />
                                <Box>
                                    <h4 style={{ color: '#5d1c78' }}>50% passing criteria</h4>
                                    <h5>All the Best! See you on the other side</h5>
                                </Box>
                            </HStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button bg="#5d1c78" color="white" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost' bg="#15a465" color="white" onClick={() => {
                                navigate("/quizpage");
                            }}>Start</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box >
        </Box >
    )
}