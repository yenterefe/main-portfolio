import { useEffect, useState } from "react";
import FreshFinder from "./FreshFinder";
import SalaryMan from "./SalaryMan";
import Smithsonian from "./Smithsonian";

const PortfolioSection = () => {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const setTimer = setTimeout(() => {
            setIsVisible(true);
        }, 8000);

        return () => {
            clearTimeout(setTimer);
        };
    }, []);

    return (
        <div className="h-[450px] p-10">
            <h2 className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} text-center`}> Portfolio</h2>
            <div className="flex flex-row gap-4 p-4">
                <FreshFinder />
                <SalaryMan />
                <Smithsonian />
            </div>

        </div>
    );
};

export default PortfolioSection;