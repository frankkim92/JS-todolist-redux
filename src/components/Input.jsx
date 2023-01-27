import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Input = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      {/* value와 onchage는 항상 패키지임 */}
      제목 :{" "}
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용 :{" "}
      <input
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodo = {
            id: uuidv4(),
            title: title,
            contents: contents,
            isDone: false,
          };

          setTodos((prev) => {
            return [...prev, newTodo];
          });
        }}
      >
        추가
      </button>
    </div>
  );
};

export default Input;
