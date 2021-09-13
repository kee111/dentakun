import React from "react";
import Hiku from "./components/Hiku";
import Number from "./components/Number";
import Tasu from "./components/Tasu";

function App() {
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nums = data.map((num) => <Number num={data[num]} />);

    return (
            <div className="container">
                <h1>でんたくんあぷり</h1>
                <div>{nums}</div>
                <Tasu />
                <Hiku />
            </div>
    );
}
export default App;
