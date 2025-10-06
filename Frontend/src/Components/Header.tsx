import GitHub from "../assets/GitHub.png";
import { Link } from "react-router";
import LinkedIn from "../assets/LinkedIn.png";

const Header = () => {
    return (
        <>
            <header>
                <div className="flex flex-row justify-between py-3 border-t-1 border-black-100 h-[100px]">
                    <ul className="flex flex-row">
                        <li className="px-20 hover:font-bold">
                            <Link to="/Home">Home</Link>
                        </li>
                        <li className="px-20 hover:font-bold">
                            <Link to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="px-20 hover:font-bold">
                            <Link to="/Blog">Blog </Link>
                        </li>
                        <li className="px-20 hover:font-bold">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-row justify-evenly">
                        <li className="px-20">
                            <img className="h-5" src={LinkedIn}
                                alt="LinkedIn Logo" />
                        </li>
                        <li className="px-20">
                            <img className="h-7" src={GitHub} alt="GitHub" />
                        </li>
                    </ul>
                </div>
            </header >

        </>
    );
};


export default Header;