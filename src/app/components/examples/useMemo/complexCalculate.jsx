import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [ohterState, setOtherState] = useState(false);
    useEffect(() => {
        console.log("render");
    });
    const fact = useMemo(() => runFactorial(value), [value]);
    const buttonColor = ohterState ? "primary" : "secondary";
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value: {value}</p>
                <p>Result factorial: {fact}</p>
                <button
                    className="btn btn-primary md-ms-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary md-ms-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Dicrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn md-ms-2 btn-${buttonColor}`}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
// useMemo - обычно используется для хранения данных вычеслений каких нибудь сложных функций
// если мы сохраняем результат какой-то функции, и храним результат этой функции, тогда используем useMemo
