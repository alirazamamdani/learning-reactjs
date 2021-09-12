
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
 const { data: blogs , error , isLoading} = useFetch("http://localhost:8000/blogs/")
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            { isLoading && <div>is Loading.....</div> }
           {blogs && <BlogList blog={blogs} title="All Blogs" />}
            {/* <BlogList blog={blog.filter((blog)=> blog.author === "mario" )} title="Mamdani"/> */}
        </div>
     );
}
 
export default Home;