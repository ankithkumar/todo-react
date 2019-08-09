import React from "react";
import ReactDOM from "react-dom";
import AppComponent from './js/app.jsx';
import './index.scss';

const App = () => {
  return <AppComponent/>;
};

let scrollEvent = null;
let runOnScroll =  () => {
  console.log('scrolled!');
  let arr = document.querySelectorAll('img[data-value]');
  console.log(arr);
  if (arr.length === 0) {
    return;
  }
  // not the most exciting thing, but a thing nonetheless
  arr.forEach(img => {
    console.log('img ', img);
    let bounding = img.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      window.setTimeout(() => {
        img['src']=img.dataset.value;
        img.removeAttribute("data-value");
      })
    }
  });
};

(function() {
  window.addEventListener('load', () => {
    window.addEventListener("scroll", runOnScroll);
  });
})();

ReactDOM.render(<App />, document.querySelector("#root"));