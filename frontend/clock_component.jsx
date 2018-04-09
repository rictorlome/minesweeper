import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
    }
    this.increment = this.increment.bind(this);
    this.counter = window.setInterval(this.increment, 1000)
  }
  increment() {
    if (this.props.started && !this.props.lost && this.state.time <= 999) {
      this.setState({time: this.state.time+1})
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.restarted !== this.props.restarted) {
      this.setState({time: 0})
    }
  }

  formatTime(time) {
    if (time < 10) return "00".concat(String(time));
    if (time < 100) return "0".concat(String(time));
    return String(time);
  }

  render() {
    const formattedTime = this.formatTime(this.state.time);
    return (
      <div id="clock-wrapper">
        {formattedTime}
      </div>
    )
  }
}

export default Clock;
