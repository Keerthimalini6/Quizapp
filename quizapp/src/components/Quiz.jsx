import React from "react";
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
} from "@chakra-ui/react";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let navigate = useNavigate();
    return (
        <Box>
            <HStack>
                <h1>The Daily React Quiz</h1>
                <Image src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" />
            </HStack>
            <Box>
                <h3>React quiz is an online test that evaluates your knowledge of React concepts. It usually includes multiple-choice questions that cover topics such as React components, JSX syntax, state and props, event handling, and lifecycle methods. The quiz may be timed, and your score is calculated based on the number of correct answers you provide.</h3>
                <Button onClick={onOpen}>Open Modal</Button>
                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Quiz Rules</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <HStack>
                                <IoIosTimer />
                                <Box>
                                    <h4>5mins</h4>
                                    <h5>Keep in mind it's a time bound quiz</h5>
                                </Box>
                            </HStack>
                            <HStack>
                                <AiOutlineQuestionCircle />
                                <Box>
                                    <h4>5 Questions</h4>
                                    <h5>We believe that you will ace it</h5>
                                </Box>
                            </HStack>
                            <HStack>
                                <BsAward />
                                <Box>
                                    <h4>50% passing criteria</h4>
                                    <h5>All the Best! See you on the other side</h5>
                                </Box>
                            </HStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost' onClick={() => {
                                navigate("/quizpage");
                            }}>Start</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}