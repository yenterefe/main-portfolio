import TypingCard from "./TypingCard";
import useDelayRender from "../Hooks/useDelayRender";

const AboutMeSection = () => {

    const setDelayRender = useDelayRender({ msSeconds: 800 })

    return (
        <>
            {setDelayRender ?
                <TypingCard
                    blurb=" I’m a software developer with a passion for full stack engineering, XR, Unity/game development, and AI. I enjoy nerding out over anything tech-related, from interactive systems to emerging tools that push the boundaries of how we build and experience software.

I work across the stack using technologies like JavaScript, TypeScript, Python, C#, React, and Node.js. I also develop immersive prototypes and experiences with Unity, combining creativity and code to bring ideas to life.

In my spare time, I love diving into topics like ancient cultures, philosophy, psychology, and nature.

Let’s create something meaningful."
                    // Need to fix time
                    cursorSpeed={80000}
                    typingSpeed={100}
                /> : null}

        </>
    );
}

export default AboutMeSection;