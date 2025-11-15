import { useEffect, useState } from "react";
import FreshFinder from "./FreshFinder";
import SalaryMan from "./SalaryMan";
import Smithsonian from "./Smithsonian";

const PortfolioSection = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const portfolios = [
        <FreshFinder />,
        <SalaryMan />,
        <Smithsonian />
    ]

    useEffect(() => {
        const setTimer = setTimeout(() => {
            setIsVisible(true);
        }, 8000);

        return () => {
            clearTimeout(setTimer);
        };
    }, []);

    const handleBackward = () => {
        setIndex((previous) =>
            (previous === 0 ? portfolios.length - 1 : previous - 1));
    }

    const handleForward = () => {
        setIndex((next) => (
            next === portfolios.length - 1 ? 0 : next + 1
        ));
    }

    return (
        <div className={`h-[450px] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} text-center`}>
            <h2 className="font-semibold py-3 text-slate-600"> Portfolio Highlights</h2>
            <div className="hidden md:flex flex-row justify-center gap-4 p-4">
                {portfolios.map((portfolio, index) => <div key={index}> {portfolio} </div>)}
            </div>
            <div className="flex flex-row gap-4 p-4 md:hidden">
                <div className="py-[120px]">
                    <button className="h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={handleBackward}><svg width="24" height="24" viewBox="-5 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2">
                        <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
                <div>
                    {portfolios[index]}
                </div>
                <div className="py-[120px]">
                    <button className="h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={handleForward}><svg width="24" height="24" viewBox="-5 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2">
                        <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
            </div >
        </div >
    );
};

export default PortfolioSection;