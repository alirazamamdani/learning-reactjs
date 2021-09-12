import { useState } from "react";
import { useHistory } from "react-router";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author , setAuthor ] = useState("");
  const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title , body , author};
        fetch("http://localhost:8000/blogs/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(blog),
        }).then(() => {
            
            history.push("/");
        })

    }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author</label>
        <select 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Ali Raza">Ali Raza</option>
          <option value="Mamdani">Mamdani</option>
        </select>
        <button>Add Blog</button>
      </form>
     
    </div>
  );
};

export default Form;
