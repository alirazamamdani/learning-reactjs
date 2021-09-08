import { useState , useEffect} from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  <useFetch />

    // const handleDeleteBlog = (id) => {
    //     const newBlogs = blog.filter(blogs => blogs.id !== id)
    //     setBlogs(newBlogs);
    // }

   

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            { isLoading && <div>is Loading.....</div> }
           {blog && <BlogList blog={data} title="All Blogs" />}
            {/* <BlogList blog={blog.filter((blog)=> blog.author === "mario" )} title="Mamdani"/> */}
           
        </div>
     );
}
 
export default Home;