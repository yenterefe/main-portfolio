import { useEffect, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6500);
    return () => {
      clearTimeout(setTimer);
    };
  }, []);

  return (
    <>
      <p
        className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} px-20 py-5 text-slate-600`}
      >
        Self-starter and fast-learning developer with experience in open-source
        projects, diverse tech stacks, and game/XR development.
      </p>
      <p
        className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} px-20 py-5 text-slate-600`}
      >
        For more information, ask my chatbot{" "}
        <span className="text-2xl">💬</span>
      </p>
    </>
  );
};

export default AboutMe;
