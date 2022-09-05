import React from "react";
import Header from "../components/Header";
import AddTodoForm from "../components/AddTodoForm";

const AddTodo = (props) => {
  return (
    <div>
      <Header />
      <AddTodoForm />
    </div>
  );
};

export default AddTodo;
