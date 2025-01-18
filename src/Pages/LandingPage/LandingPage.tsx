import Footer from "../../Components/Shared/Footer";
// import Gallery from "../../Components/Shared/Gallery";
import AcademicExcellence from "./components/AcademicExcellence";
import BlogAndAnnouncements from "./components/BlogAndAnnouncements";
import CeoSection from "./components/CeoSection";
import CounterSection from "./components/CounterSection";
import EntranceSection from "./components/EntranceSection";
import SetApartSection from "./components/SetApartSection";

const LandingPage = () => {
  return (
    <>
      <main>
        <CeoSection />
        <AcademicExcellence />
        <EntranceSection />
        <SetApartSection />
        <CounterSection />
        <BlogAndAnnouncements />
        {/* <Gallery /> */}
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
