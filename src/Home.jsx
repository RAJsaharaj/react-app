import React from "react";
import web from "../src/images/gym2.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="THE BEST PLACE FOR YOUR FITNESS"
        imgsrc={web}
        visit="/service"
        btname="LOGIN"
        btname1="singin"
      />
    </>
  );
};

export default Home;
