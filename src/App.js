import React from 'react';
import MyAppBar from "./components/AppBar";
import Test1 from "./components/Test1";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <MyAppBar />
      <Test1 />
      <Test1 />
    </React.Fragment>
    // <div className="app">
    //   <header className="app-header">
    //     <img
    //       src={logo}
    //       className="app-logo"
    //       alt="logo"
    //     />
    //     <p>
    //       Edit
    //       {' '}
    //       <code>src/App.js</code>
    //       {' '}
    //       and save to reload.
    //     </p>
    //     <a
    //       className="app-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
