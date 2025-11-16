import HeaderBlog from "./HeaderBlog";
import Footer from "../Footer";
import BlogIntroSection from "./BlogIntroSection";
import AboutBlog from "./AboutBlogSection";
import BlogSection from "./BlogSection";

const Blog = () => {
    return (
        <>
        <div className="p-4">
            <HeaderBlog />
               <div className='bg-slate-50 rounded-s-sm'>
                <BlogIntroSection />
                <AboutBlog />
                </div>
            <div className='pt-10 pb-16 shadow-sm'>
                <BlogSection />
            </div>
             <div className='flex flex-row-reverse py-16 bg-slate-50 rounded-s-sm'></div>
            <Footer />
        </div>
        </>
    )
};

export default Blog;