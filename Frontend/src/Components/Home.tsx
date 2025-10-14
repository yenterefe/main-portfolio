import Header from './Header';
import IntroSection from './IntroSection';
import AboutMe from './AboutMeSection';
import PortfolioSection from './PortfolioSection';
import AIButton from './AIButton';
import Footer from './Footer';

const home = () => {
    return (
        <div className="p-4">
            <Header />
            <IntroSection />
            <AboutMe />
            <PortfolioSection />
            <div className='flex flex-row-reverse py-12'>
                <AIButton />
            </div>
            <Footer />

        </div>
    );
};

export default home;