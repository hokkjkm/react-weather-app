import React from "react";
import Weather from "./Weather";

import GitHubButton from 'react-github-btn';

import "./App.css";

export default function App() {
  return (
    <div className="Weather">
      <div className="Container">
        <Weather defaultCity="San Francisco"/>
      </div>
      <footer>
      This project was coded by Daisy Guan and is open-sourced on <GitHubButton className="btn" href="https://github.com/hokkjkm/weather-react">Github</GitHubButton>
      </footer>
    </div>
  );
}
