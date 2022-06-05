import {Component} from 'react'

class Stopwatch extends Component {
  render() {
    ;<div className="bg-container">
      <h1 className="main-heading">Stopwatch</h1>
      <div className="watch-card-container">
        <div className="card-title-container">
          <img src="" alt="" className="clock-icon" />
          <p className="card-title">Timer</p>
        </div>
        <h1 className="time">00:00</h1>
        <div className="btn-container">
          <button className="button btn-green">Start</button>
          <button className="button btn-red">Stop</button>
          <button className="button btn-orange">Reset</button>
        </div>
      </div>
    </div>
  }
}
export default Stopwatch
