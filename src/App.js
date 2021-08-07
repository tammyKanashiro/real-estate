// import './style.scss';
import './index.css'
import { Header, Footer } from './components/common';
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
                {/* <Rent /> */}
            </Route>

            <Route path="/buy">
                {/* <Buy /> */}
            </Route>

            <Route path="/contact-us">
                {/* <Contact Us /> */}
            </Route>

            <Route path="*">
                {/* <NotFound /> */}
            </Route>
          </Switch>
        </div>
      
      <Footer />
      </Router>
     
    </div>
  );
}

export default App;
