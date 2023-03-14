import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, del } from "../store/todolistSlice";
function List(props) {
  const { list } = useSelector((state) => state.todolist || []);
  const dispatch = useDispatch();
  // 在 redux，通过 store.getState() 来获取仓库数据
  const lis = list.map((item, index) => {
    return (
      <li key={index} className="text-primary">
        <span
          onClick={() => {
            dispatch(change(index));
          }}
          className={["item", item.status ? "completed" : ""].join(" ")}
        >
          {item.content}
        </span>
        <button
          type="button"
          className="close"
          onClick={() => {
            dispatch(del(index));
          }}
        >
          &times;
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul style={{ marginTop: 20 }}>{lis}</ul>
    </div>
  );
}

export default List;
