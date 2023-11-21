import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./home/Home"
import Page2 from "./page2/page2"


function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
