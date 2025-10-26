import { Element } from 'react-scroll';

const Footer = () => {
    return (
        <div className="border-b-1 border-black-100">
            <div className="flex flex-col md:px-20 py-3 md:flex-row justify-between">
                <div className="flex flex-col md:flex-row md:gap-3">
                    <div className="flex flex-row gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor">
                            <path d="M6.6 2.2c.5-1 1.8-1.4 2.7-.9l1.9 1.1
                            c.9.5 1.2 1.6.7 2.5L10.8 7
                            c-.3.6-.3 1.2 0 1.7
                            1.2 2.2 3 4 5.2 5.2.5.3 1.1.3 1.7 0l2.1-1.1
                            c.9-.5 2-.2 2.5.7l1.1 1.9
                            c.5.9.1 2.2-.9 2.7
                            -2.5 1.3-6.9 1.4-12-3.7S5.3 4.7 6.6 2.2z"/>
                        </svg>
                        <h3>+1-352-871-1220</h3>
                    </div>
                    <div className="flex flex-row gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24" height="24"
                            fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2
                                 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <Element name="contact">
                            <a className="hover:font-bold text-blue-600" href="mailto:yenterefe@gmail.com">yenterefe@gmail.com</a>
                        </Element>
                    </div>
                </div>
                <div>
                    <h3> ©{new Date().getFullYear()}. Yeneneh Terefe. All rights reserved</h3>
                </div>
            </div>

        </div >
    );
}

export default Footer;