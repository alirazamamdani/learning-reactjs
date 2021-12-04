import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";


const BlogsDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('https://blogapplicationreact-default-rtdb.firebaseio.com/' + id);
  const history = useHistory();
 
  const handleClick = () => {
    fetch("https://blogapplicationreact-default-rtdb.firebaseio.com/" + blog.id , {
      method : "DELETE"
    }).then(()=> {
      history.push("/");
    }) 
  } 


  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogsDetails;
