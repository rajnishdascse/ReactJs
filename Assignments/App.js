import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Class from './Class';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title/>
        <p>
          Welcome to First React App by Rajnish 
        </p>
        
        <Class/>
        <Profile/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
