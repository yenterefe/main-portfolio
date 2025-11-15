
import { useEffect, useState } from "react";

const AboutBlog = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const setTimer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => {
            clearTimeout(setTimer);
        };
    }, []);

    return (
        <>
            <p className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} px-20 py-5 text-slate-600`}>Join me as I share my journey, thoughts, and lessons along the way!</p>
            
        </>
    );
}

export default AboutBlog;