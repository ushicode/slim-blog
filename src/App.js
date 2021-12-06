import Navbar from './Navbar';
import Home from './Home';

function App() {
  

  return ( //Returning JSX template. Note babel, behind the scene converts JSX to HTML
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; //Exporting the App function in this component for external use
