import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';

function App() {
  

  return (
    //Returning JSX template. Note babel, behind the scene converts JSX to HTML
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; //Exporting the App function in this component for external use
