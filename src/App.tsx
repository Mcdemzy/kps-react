import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./Pages/ContactPage/Contact";
import ContactDetails from "./Pages/ContactPage/components/ContactDetails";
import StaffPage from "./Pages/StaffPage/StaffPage";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-kps" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/kps/contact-details" element={<ContactDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
