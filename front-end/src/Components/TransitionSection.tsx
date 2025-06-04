import { useState, useEffect } from "react";

import TypingCard from "./TypingCard";

const TransitionSection = () => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRender(true)

        }, 82000);

        return () => clearTimeout(timer)
    }
    );


    return (
        <>
            {render ?
                <TypingCard
                    blurb=" I’m always exploring new ways to solve problems creatively through code and design. Below, you’ll find a selection of my recent work — from full stack applications to immersive XR experiences built in Unity. Each project reflects my curiosity, technical range, and focus on building things that are both functional and thoughtful."
                    // Need to fix time
                    cursorSpeed={10000}
                    typingSpeed={100}
                /> : null}

        </>
    );
}

export default TransitionSection;