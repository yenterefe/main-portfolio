import GitHub from "../assets/GitHub.png";
import { Link as RouterLink } from "react-router";
import LinkedIn from "../assets/LinkedIn.png";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import ListComponentSmall from "./ListComponentSmall";

const Header = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleDisplay = () => {
        setIsDisplayed(true);
    };

    const handleClosed = () => {
        setIsDisplayed(false);
    };

    return (
        <>
            <header>
                <div className="flex flex-row justify-between py-3 border-t-1 border-black-100">
                    <ul className="hidden md:flex flex-row ">
                        <li className="px-20 hover:font-bold h-[50px] w-[50px]">
                            <RouterLink to="/Home">Home</RouterLink>
                        </li>
                        <li className="px-20 hover:font-bold h-[50px] w-[50px]">
                            <RouterLink to="/Portfolio">Portfolio</RouterLink>
                        </li>
                        <li className="px-20 hover:font-bold h-[50px] w-[50px]">
                            <RouterLink to="/Blog">Blog </RouterLink>
                        </li>
                        <li className="px-20 cursor-pointer hover:font-bold h-[50px] w-[50px]">
                            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                        </li>
                    </ul>
                    {!isDisplayed ? <button className="md:hidden" onClick={handleDisplay}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button> : null}
                    {
                        isDisplayed ? <div>
                            <div className="absolute h-[300Px] w-[300px] bg-white border-2 border-gray-300 rounded-md">
                                <div className="bg-blue-100 border-2 border-blue-200 flex flex-row-reverse">
                                    {isDisplayed ?
                                        <button className="rounded-sm w-7 h-7 bg-red-500 text-white" onClick={handleClosed} >X</button> : <button className="md:hidden" onClick={handleDisplay}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                aria-hidden="true"
                                            >
                                                <line x1="4" y1="6" x2="20" y2="6" />
                                                <line x1="4" y1="12" x2="20" y2="12" />
                                                <line x1="4" y1="18" x2="20" y2="18" />
                                            </svg>
                                        </button>}
                                </div>
                                <ListComponentSmall divClassName="flex flex-col" className="p-1" />
                            </div>
                        </div> : null
                    }
                    <ul className="flex flex-row justify-evenly">
                        <li className="px-20">
                            <img className="h-6 hover:scale-125" src={LinkedIn} alt="LinkedIn logo" />
                        </li>
                        <li className="px-20">
                            <img className="h-8 hover:scale-125" src={GitHub} alt="GitHub logo" />
                        </li>
                    </ul>
                </div>
            </header >
        </>
    );
};


export default Header;