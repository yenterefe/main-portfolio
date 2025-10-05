import GitHub from "../assets/GitHub.png";
import LinkedIn from "../assets/LinkedIn.png";
const Header = () => {
    return (
        <>
            <header>
                <div className="flex flex-row justify-between py-3 border-t-1 border-black-100 h-[100px]">
                    <ul className="flex flex-row">
                        <li className="px-20 hover:font-bold">
                            About
                        </li>
                        <li className="px-20 hover:font-bold">
                            Blog
                        </li>
                        <li className="px-20 hover:font-bold">
                            Portfolio
                        </li>
                        <li className="px-20 hover:font-bold">
                            Contact
                        </li>
                    </ul>

                    <ul className="flex flex-row justify-evenly">
                        <li className="px-20">
                            <img className="h-5 hover:h-7" src={LinkedIn}
                                alt="LinkedIn Logo" />
                        </li>
                        <li className="px-20">
                            <img className="h-7 hover:h-8" src={GitHub} alt="GitHub" />
                        </li>
                    </ul>
                </div>
            </header >

        </>
    );
};


export default Header;