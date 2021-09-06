import { useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blog, setBlogs] = useState(null)



    const handleDeleteBlog = (id) => {
        const newBlogs = blog.filter(blogs => blogs.id !== id)
        setBlogs(newBlogs);
    }
    useEffect(()=> {
       fetch("http://localhost:8000/blogs")
       .then(response => {
           return response.json();
       })
       .then(data => {
        console.log(data)
        setBlogs(data)
       })
       
    }, [])

    return ( 
        <div className="home">
           {blog && <BlogList blog={blog} title="All Blogs" handleDeleteBlog={handleDeleteBlog} />}
            {/* <BlogList blog={blog.filter((blog)=> blog.author === "mario" )} title="Mamdani"/> */}
           
        </div>
     );
}
 
export default Home;