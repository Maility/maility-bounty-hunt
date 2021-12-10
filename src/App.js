import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/home'
import SignUp from './containers/users/signup'
import LogIn from './containers/users/login'
import BlogItem from './containers/blog/blogItem'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/signup">
            <SignUp />
          </Route>
          <Route path="/users/login">
            <LogIn />
          </Route>
          <Route path="/blog/:blogId">
            <BlogItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
