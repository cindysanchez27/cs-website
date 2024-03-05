import './App.css';
import {ReactTyped} from "react-typed";
import React, { Component } from 'react'
import { Link } from "react-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import * as bootstrap from 'bootstrap'
import ReactCardFlip from "./components/multipleflipcards";

function App() {
  return (
    <div className="App">
      <header className="nav">
      {/* <p><b>cindy sanchez</b></p> */}
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                home
              </Link>
            </li>
            <li>
              <Link activeClass="" smooth spy to="aboutme">
                about me
              </Link>
            </li>
            <li>
              <Link activeClass="" smooth spy to="experience">
                experience
              </Link>
            </li>
            <li>
              <Link activeClass="" smooth spy to="contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <div>
          <h1 id='typing'>
            {" "}
            <ReactTyped strings={["hi, my name is cindy sanchez :)"]} typeSpeed={100}/>
            <br/>
          </h1>
        </div>
      </section>
      {/* <section id="home">home</section> */}
     
      <section id="aboutme">
        {/* <h5 id='typing'>
          {"i am a "}
          <ReactTyped strings={["student.", "software developer.", "....", "idk", "one more thing"]} typeSpeed={100} loop /> 
        </h5> */}
        about me
        {/* <img src='tapia.jpg' className='pic_am'></img> */}
        <div className='am_div'>
          {/* <img src='tapia.jpg' className='pic_am'></img> */}
          <p className='aboutme_content'>i am a current undergraduate student at uc berkeley studying computer science. my interests include equitable CS education, software engineering, and product managment. 
          i am a huge advocate for women in stem, aiming to bridge the gender gap through programs such as cs kickstart at uc berkeley. 
          i am passionate about the use of technology for social good!</p>
          <img src='tapia.jpg' className='pic_am'></img>
        </div>
        {/* <p id='typing'>
          {"i am a "}
          <ReactTyped strings={["student, software developer, "]} typeSpeed={100} loop/>
        </p> */}
      </section>

      <section id="experience">
        <div>
          <br/>
          experience
          {/* <p className='aboutme_content'>a few things i've done at berkeley!</p> */}
          <ReactCardFlip/>
        </div>
      </section>

      <section id="contact">
        <p>contact me!</p>
        <div className="row">
          <div className="column">
            <a href="https://www.linkedin.com/in/cindysanchez27/" target="_blank" rel="noopener noreferrer"><img src="linkedin.png" class="logos"></img></a>
          </div>
          <div className="column">
            <a href="https://github.com/cindysanchez27" target="_blank" rel="noopener noreferrer"><img src="github.png" class="logos"></img></a>
          </div>
          <div className="column">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cindysanchez@berkeley.edu" target="_blank" rel="noopener noreferrer"><img src="gmail.png" class="logos"></img></a>
          </div>
        </div>
        <p>cindysanchez@berkeley.edu</p>
      </section>
    </div>
  );
}


export default App;

