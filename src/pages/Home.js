import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Assisitance from "../components/Assisitance";
import Calculator from "../components/Calculator";
import Mobiledisplay from "../components/Mobiledisplay";
import Loan from "../components/Loan";
import About from "../components/About";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Marquees from "../components/Marquees";

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <Marquees />

      <Assisitance />
      <Calculator />
      <Mobiledisplay />
      <Loan />
      <About />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
