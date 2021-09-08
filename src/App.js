import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams 
} from "react-router-dom";
import Home from './Components/Home';

// const Home = (props) => {
//   return (<h1>Welcome</h1>);
// }

const String = (props) => {
  
  const { id } = useParams();
  const {color1} = useParams();
  const {color2} = useParams();
  const rgb = {
    color: color1,
    backgroundColor: color2
  }
  if (!isNaN(id)) {
    return <h2 style={rgb}> Your number is: { id }</h2>
  }
  else {
    return (<h2 style={rgb}>Your word is: { id }  </h2>);
  }
}

function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route path = "/:id/:color1/:color2">
          <String />
        </Route>
        <Route path = "/:id">
          <String />
        </Route>
        <Route path = "/">
          <Home />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
