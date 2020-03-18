import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      alert: {
        type: "",
        message: ""
      },
      time: 0
    };
    this.times = {
      defaultTime: 1500,
      shortBreak: 300,
      longBreak: 900
    };
  }

  setDefaultTime = () => {
    this.setState({ time: this.times.defaultTime });
  };

  componentDidMount() {
    this.setDefaultTime();
  }

  setTimeForWork = () => {
    this.setState({ alert: { type: "work", message: "Working" } });
    return this.setTime(this.times.defaultTime);
  };

  setTimeForLongBreak = () => {
    this.setState({
      alert: { type: "longBreak", message: "Taking a Long Break" }
    });
    return this.setTime(this.times.longBreak);
  };

  setTimeForShortBreak = () => {
    this.setState({
      alert: { type: "shortBreak", message: "Taking a Short Break" }
    });
    return this.setTime(this.times.shortBreak);
  };

  setTime = newTime => {
    this.restartInterval();

    this.setState({
      time: newTime
    });
  };

  restartInterval = () => {
    clearInterval(this.interval);

    this.interval = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: "buz",
          message: "buzzzzz"
        }
      });
    } else {
      this.setState({
        time: this.state.time - 1
      });
    }
  };

  displayTimer(seconds) {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  render() {
    const {
      alert: { message, type },
      time
    } = this.state;
    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>{message}</div>
        <div className="timer">{this.displayTimer(time)}</div>
        <div className="types">
          <button className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>
          <button className="short" onClick={this.setTimeForShortBreak}>
            Short Break
          </button>
          <button className="long" onClick={this.setTimeForLongBreak}>
            Long Break
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
