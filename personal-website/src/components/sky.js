import React, { Component } from "react";

import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

class Example extends Component {
  render() {
    return <StarSky
  debugFps={true} // Default = false
  frameRate={30} // Default = 60
  style={{ opacity: 0.5 }} // applied to the div wrapper
  className={""} // applied to the div wrapper
  starColor={"lightgrey"} // Default = 'white', options: 'rainbow', 'white/red/green/etc'[w3color], [r, g, b]
  skyColor={[20, 20, 100]} // Default = 'black', options: 'white/red/green/etc'[w3color], [r, g, b]
/>
  }
}