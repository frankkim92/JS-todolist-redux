import React from "react";

const TodoList = ({ isActive, todos }) => {
  const TodoColor = {
    backgroundColor: "pink",
    color: "black",
    padding: "20px",
    border: "1px solid black",
  };
  return (
    <div>
      <h4>{isActive === true ? "해야할거" : "완료될거"}</h4>
      {todos
        .filter((t) => t.isDone !== isActive)

        .map((item) => {
          return (
            <div style={TodoColor} key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.conents}</p>
              <button>완료</button>
              <button>삭제</button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
