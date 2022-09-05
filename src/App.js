import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import UpdateTodo from "./pages/UpdateTodo";
import Home from "./pages/Home";


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/update-todo" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
