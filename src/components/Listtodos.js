import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Listtodos = (props) => {
  const [todos, settodos] = useState(null);
  const [didUpdate, setDidUpdate] = useState(false);




  useEffect(() => {
    axios
      .get("https://630fadfe36e6a2a04edfc321.mockapi.io/todos")
      .then((resTodos) => {
        console.log(resTodos);
        settodos(resTodos.data);
      })
      .catch((err) => console.log("todos err", err));
  }, [didUpdate]);

  const deleteTodos = (id) => {
    axios
      .delete(`https://630fadfe36e6a2a04edfc321.mockapi.io/todos/${id}`)
      .then((res) => {
        console.log("delete res", res);
        setDidUpdate(!didUpdate);
      })
      .catch((err) => console.log(err));
  };

  const setID = (id) => {
    console.log(id)
    localStorage.setItem("ID", id)
  }
  if (todos === null) {
    return <Loading />;
  }
  return (
    <div className="container my-5">
      <div className="my-3 d-flex justify-content-end">
        <Link to="/add-todo" className="btn btn-primary">
          Add Todo
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Content</th>
            <th scope="col">System</th>
            <th scope="col">User</th>
            <th className="text-center" scope="col">
              Id
            </th>
            <th className="text-center" scope="col">
              Function
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((data) => {
            return (
              <tr>
                <td>{data.content}</td>
                <td>{data.system}</td>
                <td>{data.user}</td>
                <td className="text-center">
                  {data.id}
                </td>
                <td>
                  <div className="btn d-flex justify-content-center">
                    <button
                      style={{width:'100px'}}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteTodos(data.id)}
                    >
                    Delete
                    </button>
                    <Link
                    to="/update-todo"
                    >
                     <button style={{width:'100px'}} className="btn btn-outline-success btn-sm" onClick={()=>setID(data.id)} >Update</button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Listtodos;
