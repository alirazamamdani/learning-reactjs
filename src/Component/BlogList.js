const BlogList = ({blog , title}) => {
    // const blog = props.blog;
    // const title = props.title;


    return ( 
        <div className="blogList">
            <h1>{title}</h1>
            {blog.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                       <h2>{blogs.title}</h2>
                       <p>Written by {blogs.author}</p> 
                </div>
            ))}
        </div>
     );
}
 
export default BlogList
