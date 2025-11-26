import { useState, useEffect } from "react";

interface TypingProps {
  blurb: string;
  cursorSpeed?: number;
  typingSpeed?: number;
}

const TypingCard = (props: TypingProps) => {
  const [greetings, setGreetings] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const greeting = props.blurb;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < greeting.length) {
        setGreetings((prev) => prev + greeting[index]);
        setIndex((previndex) => previndex + 1);
        setTimeout(() => {
          setBlink(false);
        }, props.cursorSpeed);
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
};

export default TypingCard;
