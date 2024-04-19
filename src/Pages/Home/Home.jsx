import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </>
  );
};

export default Home;
