import React from "react";
import web from "../src/images/gym1.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="ADMISSION OPEN"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
