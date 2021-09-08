import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

const Home = (props) => {
  return (<h1 style = {{color: "red"}}>We are in our Home Component</h1>);
}

const About = (props) => {
  return (<h1 style = {{color: "blue"}}>We are in our About Component</h1>);
}

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/home">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
        &nbsp;|&nbsp;
        <Link to="/number">Number</Link>
        &nbsp;|&nbsp;
        <Link to="/others">Other</Link>   
      </p>
      <Switch>
        <Route path = "/about">
          <About />
        </Route>
        <Route exact path = "/home">
          <Home />
        </Route>
        <Route path = "/others">
          <About />
        </Route>
        <Route exact path = "/thistoo">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
