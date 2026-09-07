import "./index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatStrip from "./components/StatStrip";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Affiliations from "./components/Affiliations";
import SearchListings from "./components/SearchListings";
import GetItSold from "./components/GetItSold";
import About from "./components/About";

/* ---------------- App ---------------- */

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <StatStrip />
      <About />
      <GetItSold />
      <SearchListings />
      <Affiliations />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
