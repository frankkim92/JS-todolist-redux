import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Input from "./components/Input";
import { useSelector } from "react-redux";

const App = () => {
  console.log(uuidv4());
  const mainStyleObj = {
    backgroundColor: "#5c24bd",
    padding: "20px",
    color: "white",
  };

  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <Header />
      <main style={mainStyleObj}>
        {/* <Input setTodos={setTodos} />
        <TodoList isActive={true} todos={todos} />
        <TodoList isActive={false} todos={todos} /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
