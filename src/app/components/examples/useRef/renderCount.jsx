// import { set } from "lodash";
import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other State
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
// useRef не рендерит страницу
// useRef хранится за пределами нашего компонента
