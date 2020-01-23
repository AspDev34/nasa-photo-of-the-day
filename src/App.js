import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import BodyComp from "./components/bodyComp/bodyComp";


function App() {
  const [Data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=9f9o0EIOy8UKqhggfDTdBdZNxfadae3JHnmelLWK')
         .then(res => {
           console.log(res.data)
           setData(res.data)
         })
         .catch(error => {
           console.log("Sorry nothing returned", error);
         })
  }, []); 
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}

      <BodyComp bodyData={Data}/>
    </div>
  );
}

export default App;
