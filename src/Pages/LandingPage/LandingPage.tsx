// import Footer from "../../Components/Shared/Footer";
import CounterSection from "./components/CounterSection";
import EntranceSection from "./components/EntranceSection";
import SetApartSection from "./components/SetApartSection";

const LandingPage = () => {
  return (
    <>
      <main>
        <EntranceSection />
        <SetApartSection />
        <CounterSection />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default LandingPage;
