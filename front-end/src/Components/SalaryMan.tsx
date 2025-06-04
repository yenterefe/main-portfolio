import { useState, useEffect } from "react";

const SalaryMan = () => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRender(true)

        }, 5000);

        return () => clearTimeout(timer)
    }
    );

    return (
        <>
            {render ? <img src="https://dummyimage.com/600x400/eeeeee/fff" className="animate-slide" /> : null}
        </>
    );
}

export default SalaryMan;