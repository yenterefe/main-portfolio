import HeaderHome from "./HeaderHome";
import IntroSection from "./IntroSection";
import AboutMe from "./AboutMeSection";
import PortfolioSection from "./PortfolioSection";
import AIButton from "./AIButton";
import Footer from "../Footer";

const home = () => {
  return (
    <div className="p-4">
      <HeaderHome />
      <div className="bg-slate-50 rounded-s-sm">
        <IntroSection />
        <AboutMe />
      </div>
      <div className="py-4 shadow-sm">
        <PortfolioSection />
      </div>
      <div className="flex flex-row-reverse py-12 bg-slate-50 rounded-s-sm">
        <AIButton />
      </div>
      <Footer />
    </div>
  );
};

export default home;
