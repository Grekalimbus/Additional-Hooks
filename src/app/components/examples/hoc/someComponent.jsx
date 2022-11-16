import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SomeComponent = ({ name }) => {
    return <Subtitle>{name || "Component"}</Subtitle>;
};
SomeComponent.propTypes = {
    name: PropTypes.string
};
export default SomeComponent;

// SomeComponent - компонент, который мы используем для примеров работы с HOC
// Это компонент, на основе которого мы делаем измененные компоненты и используем их
