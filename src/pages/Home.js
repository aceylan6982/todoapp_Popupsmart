import React from "react";
import Header from "../components/Header";
import Listtodos from "../components/Listtodos";


const Home = (props) => {
  
  return (
    <div>
      <Header />
      <Listtodos />
    </div>
  );
};

export default Home;
