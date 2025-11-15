import Header from "../Header";
import Footer from "../Footer";
import BlogIntroSection from "./BlogIntroSection";
import AboutBlog from "./AboutBlogSection";
import BlogSection from "./BlogSection";

const Blog = () => {
    return (
        <>
        <div className="p-4">
            <Header />
               <div className='bg-slate-50 rounded-s-sm'>
                <BlogIntroSection />
                <AboutBlog />
                </div>
            <div className='py-4 shadow-sm'>
                <BlogSection />
            </div>
             <div className='flex flex-row-reverse py-12 bg-slate-50 rounded-s-sm'></div>
            <Footer />
        </div>
        </>
    )
};

export default Blog;