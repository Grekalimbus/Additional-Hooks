import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const auth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        location.reload();
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        location.reload();
    };
    return (
        <CardWrapper>
            <Component
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={Boolean(auth)}
            />
        </CardWrapper>
    );
};

export default withFunctions;
