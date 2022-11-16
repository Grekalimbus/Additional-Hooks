import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropStyles = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>{`1. Обычный компонент (SomeComponent)`}</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>{`2. Функциональный HOC (withLogin)`}</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>{`3. HOC With Styles and Props (withPropsStyles)`}</SmallTitle>
                <Divider />
                <ComponentWithPropStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
// Higher-Order Components - это функция, которая принимает компонент и возвращает новый компонент.
