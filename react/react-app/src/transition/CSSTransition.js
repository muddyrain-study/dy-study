import { CSSTransition } from "react-transition-group";
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
  const [inProp, setInProp] = useState(true);
  return (
    <div className="container">
      <div className="comp-container">
        <MyTransition appear visible={inProp}>
          <h2 className="title animate__animated animate__faster">com1</h2>
        </MyTransition>
        <MyTransition mountOnEnter visible={!inProp}>
          <h2 className="title animate__animated animate__faster">com2</h2>
        </MyTransition>
      </div>
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </div>
  );
}

export default App;
