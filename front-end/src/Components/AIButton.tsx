import { useState } from "react";

const AIButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const OpenChatWindow = () => {
        setIsOpen(true);
    }

    const closeChatWindow = () => {
        setIsOpen(false)
    };

    return (
        <>
            {!isOpen ? <button className="border-2 border-blue-100 rounded-full h-20 w-20 bg-blue-50 text-4xl hover:bg-blue-400 hover:h-22 hover:w-22" onClick={OpenChatWindow}>💬</button> : null}

            {isOpen ? <div className="border-2 border-gray-200 rounded-sm h-72 w-72">
                <div className="bg-blue-50 p-2 rounded-sm flex flex-row-reverse">
                    <button className="rounded-sm w-7 h-7  hover:bg-red-500 hover:text-white" onClick={closeChatWindow}>X</button>
                </div >
                <div className="flex flex-row justify-center py-3">
                    <input className="border-2 border-gray-200 rounded-lg w-64" placeholder="Please type your question here" type="text" />
                </div>
            </div > : null}
        </>
    );
};

export default AIButton;

