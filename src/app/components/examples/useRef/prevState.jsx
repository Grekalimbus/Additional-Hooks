import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предедущее состояние</SmallTitle>
            <Divider />
            <p>Prev state: {prevState.current}</p>
            <p>Curent state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
