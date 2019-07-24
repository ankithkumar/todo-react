import React from "react";
import ReactDOM from "react-dom";
import AppComponent from './js/app.jsx';
import './index.scss';

const App = () => {
  return <AppComponent/>;
};

ReactDOM.render(<App />, document.querySelector("#root"));