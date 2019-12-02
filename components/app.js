import React from "react";
import "../scss/app.scss";
import Breakinterval from "./breakinterval";
import Sessionlength from "./sessionlength";
import Timer from "./timer";
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breaklength: 5,
            sessionlength: 25,
            timerminute: 25,
            isPlay: false,
        };
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        //timer
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
    }

    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breaklength: prevState.breaklength + 1,
        }));
    }
    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breaklength: prevState.breaklength - 1,
        }));
    }
    onIncreaseSessionLength() {
        this.setState(prevState => ({
            sessionlength: prevState.sessionlength + 1,
            timerminute: prevState.timerminute + 1,
        }));
    }
    onDecreaseSessionLength() {
        this.setState(prevState => ({
            sessionlength: prevState.sessionlength - 1,
            timerminute: prevState.timerminute - 1,
        }));
    }
    onUpdateTimerMinute() {
        this.setState(prevState => ({
            timerminute: prevState.timerminute - 1,
        }));
    }
    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerminute: this.state.sessionlength,
            });
        } else {
            this.setState({
                timerminute: this.state.breaklength,
            });
        }
    }
    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay,
        });
    }
    render() {
        return (
            <main>
                <h2>{"Pomodoro clock"}</h2>
                <section className={"interval-length-container"}>
                    <Breakinterval
                        isPlay={this.state.isPlay}
                        breakinterval={this.state.breaklength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <Sessionlength
                        isPlay={this.state.isPlay}
                        sessionlength={this.state.sessionlength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
                <Timer
                    timerminute={this.state.timerminute}
                    breaklength={this.state.breaklength}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    onPlayStopTimer={this.handleOnPlayStopTimer}
                />
            </main>
        );
    }
}
export default App;
