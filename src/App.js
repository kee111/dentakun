import React, { useState } from "react";
import Inputs from "./components/Inputs";

function App() {
    const [question, setQuestion] = useState(""); // "5 + 5", "2 + 3 * 5"
    const [answer, setAnswer] = useState("");

    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "(", ")"];
    const nums = data.map((num, index) => (
        <Inputs
            num={num}
            key={index}
            question={question}
            setQuestion={setQuestion}
        />
    ));

    return (
        <div className={"centering"}>
            <div className="container flex-row">
                <h1>でんたくんあぷり</h1>
                <div>{nums}</div>
                <h1>
                    計算: {question}
                    <button onClick={() => setAnswer(eval(question))}>=</button>
                    {answer}
                </h1>
                <button
                    onClick={() => {
                        setAnswer("");
                        setQuestion("");
                    }}
                >
                    C
                </button>
            </div>
        </div>
    );
}
export default App;

//{eval(question)}
