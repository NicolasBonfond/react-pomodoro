import React from "react";

function sessionlength(props) {
    function decreaseSession() {
        if (props.sessionlength === 1) {
            return;
        }

        props.decreaseSession();
    }
    function increaseSession() {
        if (props.sessionlength === 60) {
            return;
        }

        props.increaseSession();
    }
    return (
        <section>
            <h4 className={"interval-title"}>{"Work length"}</h4>
            <section className={"interval-container"}>
                <button type={"button"} onClick={decreaseSession}>
                    {"-"}
                </button>
                <p className={"interval-length"}>{props.sessionlength}</p>
                <button type={"button"} onClick={increaseSession}>
                    {"+"}
                </button>
            </section>
        </section>
    );
}

export default sessionlength;
