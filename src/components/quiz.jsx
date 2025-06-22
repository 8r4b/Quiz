import React, { useState } from "react";
import Result from "./result";

function Quiz() {
    const questionBank = [
        {
            question: "What is the main force that opposes lift in an aircraft?",
            option: ["Drag", "Thrust", "Weight", "Torque"],
            answer: "Weight",
        },
        {
            question: "Which part of an aircraft generates lift?",
            option: ["Fuselage", "Wing", "Rudder", "Landing gear"],
            answer: "Wing",
        },
        {
            question: "What does the black box in an aircraft record?",
            option: [
                "Passenger conversations",
                "Flight data and cockpit voice",
                "Weather conditions",
                "Fuel consumption"
            ],
            answer: "Flight data and cockpit voice",
        },
        {
            question: "Who is known as the father of modern rocketry?",
            option: [
                "Orville Wright",
                "Robert H. Goddard",
                "Amelia Earhart",
                "Igor Sikorsky"
            ],
            answer: "Robert H. Goddard",
        },
        {
            question: "What is the speed of sound at sea level (approximate)?",
            option: [
                "343 m/s",
                "123 m/s",
                "500 m/s",
                "1000 m/s"
            ],
            answer: "343 m/s",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questionBank.length).fill(null));
    const [quizFinished, setQuizFinished] = useState(false);

    function handleSelectOption(option) {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = option;
        setAnswers(newAnswers);
    }

    function goToNext() {
        if (currentQuestion < questionBank.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function handleFinish() {
        setQuizFinished(true);
    }

    function handleRestart() {
        setAnswers(Array(questionBank.length).fill(null));
        setCurrentQuestion(0);
        setQuizFinished(false);
    }

    // Calculate score
    const score = answers.reduce(
        (acc, answer, idx) => (answer === questionBank[idx].answer ? acc + 1 : acc),
        0
    );

    if (quizFinished) {
        return (
            <Result
                score={score}
                total={questionBank.length}
                answers={answers}
                questionBank={questionBank}
                onRestart={handleRestart}
            />
        );
    }

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">Question {currentQuestion + 1}</h2>
            <p className="question">{questionBank[currentQuestion].question}</p>
            <div className="options-list">
                {questionBank[currentQuestion].option.map((option) => (
                    <button
                        className={`option${answers[currentQuestion] === option ? " selected" : ""}`}
                        onClick={() => handleSelectOption(option)}
                        key={option}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <p className="selected-option">
                Option selected is {answers[currentQuestion] || "None"}
            </p>
            <div className="nav-buttons">
                <button
                    className="nav-btn"
                    onClick={goToPrev}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </button>
                {currentQuestion === questionBank.length - 1 ? (
                    <button
                        className="nav-btn finish-btn"
                        disabled={!answers[currentQuestion]}
                        onClick={handleFinish}
                    >
                        Finish
                    </button>
                ) : (
                    <button
                        className="nav-btn"
                        onClick={goToNext}
                        disabled={!answers[currentQuestion]}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default Quiz;