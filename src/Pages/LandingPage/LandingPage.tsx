import Footer from "../../Components/Shared/Footer";
import AcademicExcellence from "./components/AcademicExcellence";
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
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
