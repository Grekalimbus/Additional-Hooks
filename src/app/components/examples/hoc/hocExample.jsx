import React from "react";
import Component from "./someComponent";
import SimpleComponent from "./simpleComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
import withFunctions from "./withFunctions";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropStyles = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth);

    const ComponentWithFunctions = withFunctions(SimpleComponent);

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
            <CardWrapper>
                <SmallTitle>5. Выполнение таска</SmallTitle>
                <Divider />
                <ComponentWithFunctions />
                {/* <SimpleComponent onLogin={onLogin} onLogOut={onLogOut} isAuth /> */}
            </CardWrapper>
        </>
    );
};

export default HOCExample;
// Higher-Order Components - это функция, которая принимает компонент и возвращает новый компонент.
