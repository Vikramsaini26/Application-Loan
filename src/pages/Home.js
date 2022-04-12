import Header from "../components/Header";
import Content from "../components/Content";
import Assistance from "../components/Assistance";
import Mobiledisplay from "../components/Mobiledisplay";
import Loan from "../components/Loan";
import About from "../components/About";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";

function Home() {
  return (
    <>
      <Header />

      <Content />
      <Assistance />
      <Calculator />
      <Mobiledisplay />
      <Loan />
      <About />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
