import TypingCard from "../TypingCard";

const IntroSection = () => {
    return (
        <div className="px-20 py-5 text-slate-600">
            <TypingCard
                blurb="Hi there! I am Yen and Welcome to my portfolio website!"
                cursorSpeed={7000}
                typingSpeed={100}
            />
        </div>
    );
}

export default IntroSection;