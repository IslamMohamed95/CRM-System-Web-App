import React from "react";
import "./Home.css";
import Overview from "../Overview/Overview";
import NewCase from "../NewCase/NewCase";

function Home() {
  return (
    <section id="Home">
      <Overview />
      {/* <Dashboard /> */}
      <NewCase />
    </section>
  );
}

export default Home;
