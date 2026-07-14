import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NewServices from "./components/NewServices";
import Resources from "./components/Resources";
import Article from "./components/Article";
import Stats from "./components/Stats";
import Careers from "./components/Careers";
import Terms from "./components/Terms";
import { Helmet } from "react-helmet";

// import ContactModal from './components/ContactModal';
function App() {
  return (
    <>
      <Helmet>
        <title>Finteam - Services</title>
        <meta
          name="description"
          content="Best in class Services. From bookkeeping to strategic planning, M&A, fund & investment accounting and more, our certified team manages it all."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="App">
        <div className="content">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<NewServices />} />
              <Route path="/resources" element={<Resources asPage />} />
              <Route path="/resources/stats" element={<Stats />} />
              <Route path="/resources/:slug" element={<Article />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/termsNconditions" element={<Terms />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
