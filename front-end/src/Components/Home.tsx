import Header from './Header';
import IntroSection from './IntroSection';
import AboutMe from './AboutMeSection';
import PortfolioSection from './PortolioSection';

const home = () => {
    return (
        <div className="p-4">
            <Header />
            <IntroSection />
            <AboutMe />
            <PortfolioSection />
        </div>
    );
};

export default home;