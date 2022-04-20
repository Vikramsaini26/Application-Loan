import React from "react";
import Header from "../components/Header";
import CookieHead from "../components/CookieHead";
import CookiePolicy from "../components/CookiePolicy";
import CookieContent from "../components/CookieContent";
import Footer from "../components/Footer";

const Cookie = () => {
  return (
    <div>
      <Header />
      <CookieHead />
      <CookiePolicy />
      <CookieContent />
      <Footer />
    </div>
  );
};

export default Cookie;
