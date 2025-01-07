import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-kps" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
