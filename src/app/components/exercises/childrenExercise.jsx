import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    const FormComponent = ({ children }) => {
        console.log(React.Children.toArray(children));
        console.log(React.Children.count(children));
        return React.Children.toArray(children).map((item, i) => {
            return (
                <div className="d-flex gap-2" key={i}>
                    {i + 1} {item}
                </div>
            );
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
