import Header from './Header';
import IntroSection from './IntroSection';
import AboutMe from './AboutMeSection';
import PortfolioSection from './PortfolioSection';
import AIButton from './AIButton';

const home = () => {
    return (
        <div className="p-4">
            <Header />
            <IntroSection />
            <AboutMe />
            <PortfolioSection />
            <div className='flex flex-row-reverse'>
                <AIButton />
            </div>

        </div>
    );
};

export default home;