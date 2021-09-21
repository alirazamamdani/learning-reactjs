const Signup = () => {
  return (
    <div className="create">
      <h2 style={{textAlign: "center", fontSize: "30px"}}>Sign Up </h2>
          <form>
        <label>Email Address</label>
        <input
          type="text"
        />
         <label>Password</label>
        <input
          type="text"
         
        />
      
      
        <button className="singup-btn">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
