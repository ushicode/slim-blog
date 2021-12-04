import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to slim blog";
  const likes = 60;
  const link = "https://www.github.com"
  const person = {
    name: 'John',
    age: 28
  }

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
