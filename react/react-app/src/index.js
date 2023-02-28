import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: 1000 / 60,
      ySpeed: 1000 / 60,
    };
    const duration = 300;

    setInterval(() => {
      const xDis = (this.state.xSpeed * duration) / 1000;
      const yDis = (this.state.ySpeed * duration) / 1000;
      let { left, top } = this.state;
      let newLeft = left + xDis;
      let newTop = top + yDis;
      if (newLeft < 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      if (newTop < 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }
      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, 1000 / 60);
  }
  render() {
    const { left, top } = this.state;
    return (
      <div>
        <div
          className="ball"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "red",
            position: "absolute",
            top,
            left,
          }}
        ></div>
      </div>
    );
  }
}

root.render(<App />);
