import GitHub from '../assets/GitHub.png';
import LinkedIn from '../assets/LinkedIn.png'
const Header = () => {
    return (
        <>
            <header>
                <div className='flex flex-row justify-between py-3 border-t-1 border-black-100'>
                    <ul className='flex flex-row'>
                        <li className='px-20'>
                            About
                        </li>
                        <li className='px-20'>
                            Blog
                        </li>
                        <li className='px-20'>
                            Portfolio
                        </li>
                        <li className='px-20'>
                            Contact
                        </li>
                    </ul>

                    <ul className='flex flex-row justify-evenly '>
                        <li className='px-20'>
                            <img className='h-5' src={LinkedIn}
                                alt="LinkedIn Logo" />
                        </li>
                        <li className='px-20'>
                            <img className="h-6" src={GitHub} alt="GitHub" />
                        </li>
                    </ul>
                </div>
            </header >

        </>
    );
};


export default Header;