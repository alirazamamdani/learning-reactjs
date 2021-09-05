import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blog, setBlogs] = useState([
          {title : 'My new website', body : 'lorem ipsum....', author : 'mario', id: 1},
          {title : 'Welcome React', body : 'lorem ipsum....', author : 'Mamdani', id: 2},
          {title : 'Welcome Javascript', body : 'lorem ipsum....', author : 'mario', id: 3},
          {title : 'Welcome Javascript', body : 'lorem ipsum....', author : 'mario', id: 4},
    ])



    const handleDeleteBlog = (id) => {
        const newBlogs = blog.filter(blogs => blogs.id !== id)
        setBlogs(newBlogs);
    }
    useEffect(()=> {
        console.log("use Effect running")
       
    }, [])

    return ( 
        <div className="home">
            <BlogList blog={blog} title="All Blogs" handleDeleteBlog={handleDeleteBlog} />
            {/* <BlogList blog={blog.filter((blog)=> blog.author === "mario" )} title="Mamdani"/> */}
           
        </div>
     );
}
 
export default Home;