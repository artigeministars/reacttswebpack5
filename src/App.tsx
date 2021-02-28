import React from "react";
import logo from "./logo.svg";
import jpegg from "./ge.jpeg";
import pngg from "./gth.png";
import "./App.css";
import "./App.scss";

function App() {
    console.log(process.env.MAINTAINER);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <img src={jpegg} className="App-logod" alt="logod" />
                <img src={pngg} className="App-logdo" alt="logod" />
            </header>
        </div>
    );
}

export default App;
