import { useEffect, useState } from "react";
import BlogButton from "./BlogButton";

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const buttons = [
    <BlogButton link="/MyJourney" title="How My Journey Started" />,
    <BlogButton link="/MyWebsite" title="My Website" />,
    <BlogButton link="/MyRoutine" title="My Daily Routine" />,
  ];

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      clearTimeout(setTimer);
    };
  }, []);

  const handleBackward = () => {
    setIndex((previous) =>
      previous === 0 ? buttons.length - 1 : previous - 1
    );
  };

  const handleForward = () => {
    setIndex((next) => (next === buttons.length - 1 ? 0 : next + 1));
  };

  return (
    <div
      className={`h-auto transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} text-center`}
    >
      <h2 className="font-semibold py-3 text-slate-600"> My Blogs</h2>
      <div className="hidden md:flex flex-row flex-wrap justify-center gap-4 p-4">
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
      <div className="flex flex-row gap-4 p-4 md:hidden">
        <div className="py-[120px]">
          <button
            className="h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100"
            onClick={handleBackward}
          >
            <svg
              width="24"
              height="24"
              viewBox="-5 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M15 6l-6 6 6 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>{buttons[index]}</div>
        <div className="py-[120px]">
          <button
            className="h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100"
            onClick={handleForward}
          >
            <svg
              width="24"
              height="24"
              viewBox="-5 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
