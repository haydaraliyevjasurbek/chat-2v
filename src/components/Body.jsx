import React, { useContext } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./footer";
import { Context } from "@/context/Context";

const Body = () => {
  const {
    alexText,
    setAlexText
  } = useContext(Context);
  console.log(alexText)
  return (
  <>
    <Nav/>
    <Main/>
    <Footer/>
  </>
  ) 
};

export default Body;
