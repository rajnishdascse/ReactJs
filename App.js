import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Class from './Class';
import Profile from './Profile';
import PropsEg  from './PropsEg';
import Countries from './Countries';
import ChangeTitle from './ChnageTitle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title/>
       {/* <ChangeTitle/>  */}
        <p>
          Welcome to First React App by Rajnish 
        </p>
        <PropsEg/>
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
    {/*  <Countries/>  */}
      </header>
    </div>
  );
}

export default App;
