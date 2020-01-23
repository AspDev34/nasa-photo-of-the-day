import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {
  useEffect(() => {
    axios
      // .get('https://api.nasa.gov/planetary/apod?api_key=9f9o0EIOy8UKqhggfDTdBdZNxfadae3JHnmelLWK')
         .then(res => {
           console.log(res);
         })
         .catch(error => {
           console.log("Sorry nothing returned", error);
         })
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
