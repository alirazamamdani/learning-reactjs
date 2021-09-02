const Home = () => {

    const handleClick = () => {
        console.log("Click me")
    }
    const handleClickAgain = (name, e) => {
        console.log("Hello "+ name, e.target)
    }    

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick} >Click Me</button>
            <button onClick={(e)=> handleClickAgain("Ali Raza", e)}>Click me Again</button>
        </div>
     );
}
 
export default Home;