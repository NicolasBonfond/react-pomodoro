import React from "react";

function breakinterval(props) {
    function decreaseCounter() {
        if (props.breakinterval === 1) {
            return;
        }

        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakinterval === 60) {
            return;
        }

        props.increaseBreak();
    }
    return (
        <section>
            <h4 className={"interval-title"}>{"Break length"}</h4>
            <section className={"interval-container"}>
                <button type={"button"} onClick={decreaseCounter}>
                    {"-"}
                </button>
                <p className={"interval-length"}>{props.breakinterval}</p>
                <button type={"button"} onClick={increaseCounter}>
                    {"+"}
                </button>
            </section>
        </section>
    );
}
export default breakinterval;
