import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [userName, setUserName] = useState("")
  const [isUsername, setIsusername] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsusername(true)
    if (userName) {
      localStorage.setItem("Username", userName)
    }
    setUserName("")
    isUsername(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          TODO LIST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link d-flex justify-content-center align-item-center" to="/">
                <div className="d-flex justify-content-center align-item-center">
                  <input value={userName}
                    placeholder={userName}
                    onChange={((event) => setUserName(event.target.value))} />
                </div>
                <div>
                  <button onClick={handleSubmit} type="submit" className="btn btn-success w-100 text-center">Save</button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Header;
