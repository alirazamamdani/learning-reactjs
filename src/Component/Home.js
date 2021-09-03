import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blog, setBlogs] = useState([
          {title : 'My new website', body : 'lorem ipsum....', author : 'mario', id: 1},
          {title : 'Welcome React', body : 'lorem ipsum....', author : 'mario', id: 2},
          {title : 'Welcome Javascript', body : 'lorem ipsum....', author : 'mario', id: 3},
          {title : 'Welcome Javascript', body : 'lorem ipsum....', author : 'mario', id: 3},
    ])
   

    return ( 
        <div className="home">
            <BlogList blog={blog} title="All Blogs"/>
        </div>
     );
}
 
export default Home;