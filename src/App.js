import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams 
} from "react-router-dom";

const Home = (props) => {
  return (<h1>Welcome</h1>);
}

const String = (props) => {
  const { id } = useParams();
  if (!isNaN(id)) {
    return <h2> Your number is: { id }</h2>
  }
  else {
    return (<h2>Your word is: { id }  </h2>);
  }
}

function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route path = "/:id">
          <String />
        </Route>
        <Route exact path = "/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
