import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todolistSlice";

function Input(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function clickHandle() {
    dispatch(add(value));
    setValue("");
  }

  return (
    <div className="form-inline">
      <input
        type="text"
        className="form-control"
        placeholder="请输入待办事项"
        style={{
          marginRight: 10,
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-primary" onClick={clickHandle}>
        提交
      </button>
    </div>
  );
}

export default Input;
