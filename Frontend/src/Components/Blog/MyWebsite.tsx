import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Footer";
import HeaderBlog from "./HeaderBlog";

const MyWebsite = ()=>{
  
    const navigate = useNavigate();

    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleDisplay = () => {
        setIsDisplayed(true);
    };

    const handleClosed = () => {
        setIsDisplayed(false);
    };


    return(
           <div className="p-4">
            <HeaderBlog />
                <div className='bg-slate-50 rounded-s-sm'>
                    <div className='bg-slate-50 rounded-s-sm'>
                    <p className="px-20 py-12 text-slate-600 flex justify-center font-semibold">My Website</p>
        
                    </div>
                </div>
                <div className="p-4">
                    <div className="py-[120px] flex flex-row justify-center">
                        <button className="cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={()=>navigate("/MyJourney")}><svg width="24" height="24" viewBox="-5 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2">
                            <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                        </button>
                        <p className="flex flex-wrap text-slate-600 pl-6 md:p-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima necessitatibus sunt, et suscipit animi assumenda eveniet explicabo voluptatem ducimus recusandae quidem a dolore sit nobis at labore, itaque tenetur!</p>
                        <button className="cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={()=>navigate("/MyRoutine")}><svg width="24" height="24" viewBox="-5 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2">
                            < path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                 <div className="flex justify-center p-20">
                    {!isDisplayed ? <button className="cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={handleDisplay}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="-5.5 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button> : 
                        <div className="relative">
                            <textarea className="static h-[200px] w-[300px] md:w-[500px] border-2 border-gray-100 text-slate-600 rounded-sm p-2" placeholder="Type your comment..."></textarea>
                            <button type="submit" className="absolute bottom-3 left-55 md:left-105 cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[70px] rounded-full bg-blue-50 border-2 border-blue-100" onClick={handleClosed}>
                                submit
                            </button>
                        </div>}
                </div>
                <div className="flex flex-row-reverse py-16 bg-slate-50 rounded-s-sm"></div>
            <Footer />
        </div>
    );
}

export default MyWebsite;