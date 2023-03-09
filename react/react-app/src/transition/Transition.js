import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";
import "./transition.css";
import "animate.css";
import { v4 as uuid } from "uuid";
function App() {
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: "Buy eggs",
    },
    {
      id: uuid(),
      text: "Pay bills",
    },
    {
      id: uuid(),
      text: "Invite friends over",
    },
    {
      id: uuid(),
      text: "Fix the TV",
    },
  ]);
  return (
    <TransitionGroup appear>
      {items.map((item) => (
        <CSSTransition
          timeout={1000}
          key={item.id}
          classNames={{
            exit: "animate__bounceOut",
            enterActive: "animate__bounceIn",
            appearActive: "animate__bounceIn",
          }}
        >
          <div>
            <span> {item.text}</span>
            <button
              onClick={() => {
                setItems(items.filter((c) => c.id !== item.id));
              }}
            >
              删除
            </button>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default App;
