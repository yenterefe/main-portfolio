import TypingCard from "./TypingCard";

import useDelayRender from "../Hooks/useDelayRender";

const TransitionSection = () => {

    // need to fix time
    const setDelayRender = useDelayRender({ msSeconds: 82000 })

    return (
        <>
            {setDelayRender ?
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