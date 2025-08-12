import TypingCard from "./TypingCard";
import useDelayRender from "../Hooks/useDelayRender";

const AboutMeSection = () => {

    const setDelayRender = useDelayRender({ msSeconds: 800 })

    return (
        <>
            {setDelayRender ?
                <TypingCard
                    blurb="I enjoy tackling complex problems and optimizing solutions. In my spare time, I level up my problem-solving skills by studying data structures, algorithms, and contributing to open-source projects"
                    // Need to fix time
                    cursorSpeed={80000}
                    typingSpeed={100}
                /> : null}

        </>
    );
}

export default AboutMeSection;