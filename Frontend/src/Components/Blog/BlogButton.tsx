import { useNavigate } from "react-router";

interface ButtonProps{
    title: string,
    link: string
}

const BlogButton = ({title, link}: ButtonProps)=>{
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate(`${link}`)} className="bg-gray-50 rounded-md shadow-gray-100 hover:scale-105 p-5 cursor-pointer ">
            <img className="h-[70px] py-7 w-[70px] md:h-80 md:w-auto md:py-0" src="https://dummyimage.com/600x400/eeeeee/fff" />
            <div className="text-center">
                <p className="h-10 p-2 text-slate-700">{title}</p>
            </div>
        </div>
    );
}

export default BlogButton;