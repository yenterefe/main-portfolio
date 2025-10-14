import { useState } from "react";
import axios from "axios";

const AIButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    interface Message {
        text: string
        sender: "user" | "bot";
    }

    const OpenChatWindow = () => {
        setIsOpen(true);
    }

    const closeChatWindow = () => {
        setIsOpen(false)
    };

    const userMessage: Message = {
        text: input,
        sender: "user"
    };

    const handleClick = async () => {
        if (!input.trim()) {
            return;
        }

        setMessages((previous) => [...previous, userMessage])

        try {
            const { data } = await axios.post('http://localhost:5000/api/chat', {
                message: input
            });

            const botMsg: Message = {
                text: data.reply,
                sender: "bot"
            };

            setMessages((previous) => [...previous, botMsg]);

        } catch (error) {
            console.log(error);
        }

        setInput("");
    };

    return (
        <>
            {isOpen ? <div className="border-2 border-gray-200 rounded-sm size-auto">
                <div className="bg-blue-50 rounded-sm flex flex-row-reverse justify-between">
                    <button className="rounded-sm w-7 h-7  hover:bg-red-500 hover:text-white" onClick={closeChatWindow}>X</button>
                    <p className="p-1">Chatbot Assistant</p>
                </div >
                <div className="flex flex-col justify-center p-2">
                    <ul>
                        <li className="border-2 rounded-full py-[15px] px-[50px] max-w-[550px] bg-gray-100 border-gray-300">
                            Hi, I am Yen's Chatbot, please ask me questions 😊
                        </li>
                    </ul>
                    <div className="relative w-full max-w-[550px]">
                        <ul className="p-[10px] flex flex-col space-y-2">
                            {messages.map((message, index) => (
                                <li
                                    key={index}
                                    className={`border-2 rounded-full py-[15px] px-[50px] max-w-[550px] ${message.sender === "user"
                                        ? "bg-blue-100 border-blue-200"
                                        : "bg-gray-100 border-gray-300"
                                        }`}
                                >
                                    {message.text}
                                </li>
                            ))}
                        </ul>
                        <input className="border-2 p-1 border-gray-200 rounded-xl h-9 w-96"
                            placeholder="Please type your question here"
                            type="text"
                            value={input}
                            onChange={e => {
                                setInput(e.target.value);
                            }}
                            onKeyDown={e => {
                                if (e.key === "Enter") {
                                    handleClick();
                                };
                            }}
                        />
                        <button className="rounded-full border-2 border-gray-100 bg-blue-100 hover:bg-blue-300 p-1 absolute right-0"
                            onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div > :
                <button className="border-2 border-blue-100 rounded-full h-20 w-20 bg-blue-50 text-4xl hover:bg-blue-400 hover:h-22 hover:w-22"
                    onClick={OpenChatWindow}>💬</button>}
        </>
    );
};

export default AIButton;

