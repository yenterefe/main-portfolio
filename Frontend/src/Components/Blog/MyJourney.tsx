import Footer from "../Footer";
import HeaderBlog from "./HeaderBlog";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

interface Message {
  _id: string;
  name: string;
  comment: string;
  likes: number;
  dislike: number;
}

const MyJourney = () => {
  const navigate = useNavigate();

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [comments, setComment] = useState<Message[]>([]);
  const [commentID, setCommentID] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/comment");
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDisplay = () => {
    setIsDisplayed(true);
  };

  const handleClose = () => {
    setIsDisplayed(false);
  };

  const handleClick = async () => {
    if (!input.trim() && !name) {
      return;
    }

    try {
      if (!commentID) {
        const { data: received } = await axios.post(
          "http://localhost:5000/api/comment",
          {
            name: name,
            comment: input,
          }
        );
        setComment((previous) => [...previous, received]);
      } else {
        const { data: updated } = await axios.put(
          `http://localhost:5000/api/comment/${commentID}`,
          {
            name: name,
            comment: input,
          }
        );

        setComment((prev) =>
          prev.map((msg) => (msg._id === commentID ? updated : msg))
        );

        setCommentID(null);
      }
    } catch (error) {
      console.log(error);
    }

    setInput("");
    setName("");
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/comment/${id}`);
      // refresh UI
      setComment(comments.filter((m) => m._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id: string) => {
    const { data } = await axios.patch(
      `http://localhost:5000/api/comment/${id}/like`
    );

    setComment((prev) => prev.map((msg) => (msg._id === id ? data : msg)));
  };

  const handleDislike = async (id: string) => {
    const { data } = await axios.patch(
      `http://localhost:5000/api/comment/${id}/dislike`
    );

    setComment((prev) => prev.map((msg) => (msg._id === id ? data : msg)));
  };

  const handUpdated = async (id: string) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/comment/${id}`
      );

      setCommentID(data._id);

      setName(data.name);

      setInput(data.comment);

      setIsDisplayed(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <HeaderBlog />
      <div className="bg-slate-50 rounded-s-sm">
        <div className="bg-slate-50 rounded-s-sm">
          <p className="px-20 py-12 text-slate-600 flex justify-center font-semibold">
            How My Journey Started
          </p>
        </div>
      </div>
      <div className="">
        <div className="py-[120px] flex flex-row justify-center shadow-sm rounded-sm">
          <button
            className="cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100"
            onClick={() => navigate("/MyRoutine")}
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
          <p className="flex flex-wrap text-slate-600 pl-6 md:p-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            minima necessitatibus sunt, et suscipit animi assumenda eveniet
            explicabo voluptatem ducimus recusandae quidem a dolore sit nobis at
            labore, itaque tenetur!
          </p>
          <button
            className="cursor-pointer  hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100"
            onClick={() => navigate("/MyWebsite")}
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
        <div className="bg-slate-50 rounded-sm py-16">
          <ul className="px-5">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-white w-auto border-8 rounded-sm border-gray-50 p-3  text-slate-600"
              >
                <div className="pb-1">{"@" + "" + comment.name}</div>
                <div className="px-4">{comment.comment}</div>
                <div className="pl-3">
                  <button
                    onClick={() => handleLike(comment._id)}
                    className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                  >
                    👍
                  </button>
                  <span>{comment.likes}</span>
                  <span>
                    <button
                      onClick={() => handleDislike(comment._id)}
                      className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      👎
                    </button>
                  </span>
                  <span>{comment.dislike}</span>
                  <span className="p-1 rounded-full hover:bg-gray-200">
                    <button
                      className="cursor-pointer"
                      onClick={() => handUpdated(comment._id)}
                    >
                      📝
                    </button>
                  </span>
                  <span className="p-1 rounded-full hover:bg-gray-200">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDelete(comment._id)}
                    >
                      🗑️
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center p-20 shadow-sm rounded-sm">
        {isHover ? (
          <div className="absolute bottom-5 h-[50px] w-[150px] rounded-sm bg-black border-1 border-gray-200 flex justify-center p-2 items-center">
            <text className="text-center font-semibold text-white ">
              Add comment
            </text>
          </div>
        ) : null}
        {!isDisplayed ? (
          <div className="relative">
            <button
              className={`cursor-pointer hover:bg-blue-400 hover:scale-125 h-[40px] w-[40px] rounded-full bg-blue-50 border-2 border-blue-100`}
              onClick={() => {
                handleDisplay();
                setIsHover(false);
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="-5.5 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="relative border-2 border-blue-200 rounded-md h-[400px] p-4 bg-blue-50">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="rounded-sm w-7 h-7 bg-red-500 text-white md:bg-blue-50 md:text-slate-600 md:hover:bg-red-500 md:hover:text-white"
              >
                X
              </button>
            </div>
            <label htmlFor="input" className="p-2  text-slate-600 font-bold">
              Name
            </label>
            <div className="border-2 border-gray-100 text-slate-600 rounded-sm">
              <input
                className="bg-white border-2 border-gray-100 rounded-sm p-2 w-[300px]"
                placeholder="Type your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <label htmlFor="input" className="p-2  text-slate-600 font-bold">
              Comment
            </label>
            <div>
              <textarea
                className="h-[200px] w-[300px] md:w-[500px] border-2 border-gray-100 text-slate-600 p-2 bg-white rounded-sm"
                placeholder="Write your comment"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="md:left-105 cursor-pointer  hover:bg-blue-600 hover:scale-110 h-[40px] w-[100px] rounded-full bg-blue-500 border-2 border-blue-100 font-bold text-gray-50"
                onClick={() => {
                  handleClose();
                  handleClick();
                }}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row-reverse py-16 bg-slate-50 rounded-s-sm"></div>
      <Footer />
    </div>
  );
};

export default MyJourney;
