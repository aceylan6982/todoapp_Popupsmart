import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddTodoForm = (props) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [system, setSystem] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(content).length >=3 ) {
      alert("New todo must contain three words at least");
      return;
    }
    const newTodos = {
      content: content,
      user: user,
      system: system
    };
    axios
      .post("https://630fadfe36e6a2a04edfc321.mockapi.io/todos", newTodos)
      .then((res) => {
        console.log("add todos", res);
        setContent("");
        setUser("");
        setSystem("");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <input
              className="form-control"
              placeholder="system"
              value={system}
              onChange={(event) => setSystem(event.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
