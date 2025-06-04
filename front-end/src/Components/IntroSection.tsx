import TypingCard from "./TypingCard";

const IntroSection = () => {
    return (
        <>
            <TypingCard
                blurb="Hi there! I am Yen and Welcome to my portfolio website!"
                // Need to fix time
                cursorSpeed={6900}
                typingSpeed={100}
            />
        </>
    );
}

export default IntroSection;