import React from "react";

function Result({ score, total, answers, questionBank, onRestart }) {
    return (
        <div className="result-container">
            <h2>Quiz Finished!</h2>
            <p>
                Your Score: {score} / {total}
            </p>
            <h3>Review:</h3>
            <ul>
                {questionBank.map((q, idx) => (
                    <li key={idx}>
                        <strong>Q{idx + 1}:</strong> {q.question}
                        <br />
                        <span>
                            Your answer:{" "}
                            <span style={{ color: answers[idx] === q.answer ? "green" : "red" }}>
                                {answers[idx] || "No answer"}
                            </span>
                            {" | "}
                            Correct answer: <span style={{ color: "green" }}>{q.answer}</span>
                        </span>
                    </li>
                ))}
            </ul>
            <button className="nav-btn" onClick={onRestart}>
                Restart Quiz
            </button>
        </div>
    );
}

export default Result;