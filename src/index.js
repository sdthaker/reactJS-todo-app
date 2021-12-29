import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from "./components/functionBased/TodoContainer"
import { BrowserRouter as Router } from "react-router-dom"

//stylesheet
import "./components/functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
