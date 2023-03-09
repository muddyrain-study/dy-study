import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from "react";
import "./transition.css";
import "animate.css";

const MyTransition = ({ children, visible, ...props }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={1000}
      classNames={{
        exitActive: "animate__fadeOutLeft",
        exitDone: "exit-done",
        enterActive: "animate__fadeInRight",
        appearActive: "animate__fadeInRight",
      }}
      {...props}
    >
      {children}
    </CSSTransition>
  );
};

function App() {
  const [show1, setShow1] = useState(true);
  return (
    <div className="container">
      <div className="comp-container">
        <SwitchTransition>
          <CSSTransition
            appear
            in={show1}
            timeout={500}
            key={show1}
            classNames={{
              exit: "animate__bounceOut",
              enterActive: "animate__bounceIn",
              appearActive: "animate__bounceIn",
            }}
          >
            <h2
              className="animate__animated animate_slow"
              style={{ textAlign: "center" }}
            >
              {show1 ? "title1" : "title2"}
            </h2>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <button onClick={() => setShow1(!show1)}>Click to Enter</button>
    </div>
  );
}

export default App;
