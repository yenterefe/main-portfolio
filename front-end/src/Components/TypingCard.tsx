import { useState, useEffect, useRef } from "react";
import keystroke from "../assets/mechanicalKeyboard.wav";

interface TypingProps {
    blurb: string,
    cursorSpeed: number,
    typingSpeed: number
}

const TypingCard = (props: TypingProps) => {
    const [greetings, setGreetings] = useState("");
    const [index, setIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const greeting = props.blurb;

    const soundRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        soundRef.current = new Audio(keystroke);
        soundRef.current.volume = 0.2;
        soundRef.current.playbackRate = 1;
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < greeting.length) {
                setGreetings((prev) => prev + greeting[index]);
                setIndex((previndex) => previndex + 1);

                // Play the sound effect
                if (soundRef.current) {
                    soundRef.current.play();
                }

                setTimeout(() => {
                    setBlink(false);
                }, props.cursorSpeed);
            } else {
                if (soundRef.current) {
                    soundRef.current.pause();
                    soundRef.current.currentTime = 0;
                }
            }
        }, props.typingSpeed);

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <>
            <div>
                {greetings}
                <span className={blink ? "animate-ping" : "hidden"}>|</span>
            </div>
        </>
    );
}

export default TypingCard;

