import './App.css';
import { Header } from './components/common';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="content">
          <Switch>
            <Route exact path="/">
                {/* <Home /> */}
            </Route>

            <Route path="/rent">
                {/* <Create /> */}
            </Route>

            <Route path="/buy">
                {/* <BlogDetails /> */}
            </Route>

            <Route path="/contact-us">
                {/* <BlogDetails /> */}
            </Route>

            <Route path="*">
                {/* <NotFound /> */}
            </Route>
          </Switch>
        </div>
      
      </Router>
     
    </div>
  );
}

export default App;
