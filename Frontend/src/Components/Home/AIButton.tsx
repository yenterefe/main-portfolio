import { useState } from "react";
import axios from "axios";

const AIButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  interface Message {
    text: string;
    sender: "user" | "bot";
  }

  const OpenChatWindow = () => {
    setIsOpen(true);
  };

  const closeChatWindow = () => {
    setIsOpen(false);
  };

  const userMessage: Message = {
    text: input,
    sender: "user",
  };

  const handleClick = async () => {
    if (!input.trim()) {
      return;
    }

    setMessages((previous) => [...previous, userMessage]);

    try {
      const { data } = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMsg: Message = {
        text: data.reply,
        sender: "bot",
      };

      setMessages((previous) => [...previous, botMsg]);
    } catch (error) {
      console.log(error);
    }

    setInput("");
  };

  return (
    <>
      {isOpen ? (
        <div className="border-2 border-gray-200 rounded-sm size-auto">
          <div className="bg-blue-50 rounded-sm flex flex-row-reverse justify-between">
            <button
              className="rounded-sm w-7 h-7 bg-red-500 text-white md:bg-blue-50 md:text-slate-600 md:hover:bg-red-500 md:hover:text-white"
              onClick={closeChatWindow}
            >
              X
            </button>
            <p className="p-1">Chatbot Assistant</p>
          </div>
          <div className="flex flex-col justify-center p-2">
            <ul>
              <li className="border-2 rounded-full py-[15px] px-[50px] bg-gray-100 border-gray-300 self-start text-left">
                Hi, I am Yen's Chatbot, please ask me questions 😊
              </li>
            </ul>
            <div className="Sw-full max-w-[550px]">
              <ul className="p-[10px] flex flex-col space-y-2">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={`border-2 rounded-full py-[30px] px-[55px] md:py-[15px] md:px-[50px] max-w-[550px] ${
                      message.sender === "user"
                        ? "bg-blue-100 border-blue-200 self-end text-right"
                        : "bg-gray-100 border-gray-300 self-start text-left"
                    }`}
                  >
                    {message.text}
                  </li>
                ))}
              </ul>
              <span className="relative p-1 md:p-2">
                <input
                  className="border-2 rounded-full py-[12px] px-[60px] md:py-[12px] md:px-[169px] bg-white border-gray-300"
                  placeholder="Please type your question here"
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClick();
                    }
                  }}
                />
                <button
                  className=" absolute -bottom-2 md:-bottom-1 right-2 md:right-3 scale-90 rounded-full border-2 border-blue-200 bg-blue-100 hover:bg-blue-300"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="currentColor"
                    viewBox="-3 0 26 26"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            className=" cursor-pointer border-2 border-blue-400 rounded-full h-20 w-20 bg-blue-300 text-4xl hover:bg-blue-400 hover:scale-125"
            onClick={OpenChatWindow}
          >
            💬
          </button>
        </div>
      )}
    </>
  );
};

export default AIButton;
