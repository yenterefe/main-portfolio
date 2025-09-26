import TypingCard from "./TypingCard";

const IntroSection = () => {
    return (
        <div className="p-4">
            <TypingCard
                blurb="Hi there! I am Yen and Welcome to my portfolio website!"
                cursorSpeed={7000}
                typingSpeed={100}
            />
        </div>
    );
}

export default IntroSection;