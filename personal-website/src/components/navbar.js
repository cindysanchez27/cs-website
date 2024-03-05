// export default class App extends Component {
//     render() {
//       return (
//         <div id="App">
//           <section id="navbar-container">
//             <nav id="navbar"></nav>
//           </section>
//         </div>
//       );
//     }
//   }

import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
  
// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
function Navbar() {
    return (
      <div id="App">
        <section id="navbar-container">
          <nav id="navbar">
            <Link to="/">home</Link>
            <Link to="/aboutme">about me</Link>
            <Link to="/experience">experience</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </section>
      </div>
    );
}
  
export default Navbar;