import TypingCard from "../TypingCard";

const BlogIntroSection = () => {
  return (
    <div className="px-20 py-5 text-slate-600">
      <TypingCard
        blurb="Welcome to my blog!"
        cursorSpeed={7000}
        typingSpeed={100}
      />
    </div>
  );
};

export default BlogIntroSection;
