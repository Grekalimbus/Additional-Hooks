import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

// поскольку HOC это функция, называем её с маленькой буквы
// мы используем однострочное выражение функции, но можно сделать так:

// const withLogin = function(Component) {
// 	return function (props) { ... }
// }
const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
