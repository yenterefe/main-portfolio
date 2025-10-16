import GitHub from "../assets/GitHub.png";
import { Link as RouterLink } from "react-router";
import LinkedIn from "../assets/LinkedIn.png";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    return (
        <>
            <header>
                <div className="flex flex-row justify-between py-3 border-t-1 border-black-100">
                    <ul className="flex flex-row ">
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