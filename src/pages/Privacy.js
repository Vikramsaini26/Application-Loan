import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieHead from "../components/CookieHead";
import PrivacyContent from "../components/PrivacyContent";
import Privacyintro from "../components/Privacyintro";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <CookieHead />
      <PrivacyContent />
      <Privacyintro />
      <Footer />
    </div>
  );
};

export default Privacy;
