import React from "react";

class timer extends React.Component {
    constructor() {
        super();
        this.state = {
            issession: true,
            timersecond: 0,
            intervalId: 0,
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
    playTimer() {
        const intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId,
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.UpdateTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }
                break;
            default:
                this.setState(prevState => ({
                    timerSecond: prevState.timerSecond - 1,
                }));
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true,
        });
    }

    render() {
        return (
            <section>
                <section className={"timer-container"}>
                    <h4 className={"interval-title"}>
                        {this.state.issession === true ? "Session" : "Break"}
                    </h4>
                    <span className={"timer"}>{this.props.timerminute}</span>
                    <span className={"timer"}>{":"}</span>
                    <span className={"timer"}>
                        {this.state.timersecond === 0
                            ? "00"
                            : this.state.timersecond < 10
                            ? `0${this.state.timersecond}`
                            : this.state.timersecond}
                    </span>
                </section>
                <section className={"timer-actions"}>
                    <button type={"button"} onClick={this.handlePlayTimer}>
                        {"Play"}
                    </button>
                    <button type={"button"} onClick={this.handleStopTimer}>
                        {"Pause"}
                    </button>
                    <button type={"button"} onClick={this.handleResetTimer}>
                        {"Refresh"}
                    </button>
                </section>
            </section>
        );
    }
}
export default timer;
