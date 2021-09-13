import Navbar from './Component/Navbar'
import Home from './Component/Home'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import CreateForm from './Component/CreateForm'
import BlogsDetails from './Component/BlogDetails';
import NotFound  from './Component/Notfound';


function App() {
  return (
    <Router >
    <div className="App">
       <Navbar />
      <div className="content">
       <Switch>
         <Route exact path="/">
          <Home />
         </Route>
         <Route path="/create" >
          <CreateForm />
         </Route>
         <Route path="/blogs/:id" >
          <BlogsDetails />
         </Route>
         <Route path="*" >
          <NotFound />
         </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
