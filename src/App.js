import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Framingham } from "./components/Framingham";

function App() {
  const [framinghamData, setFraminghamData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/framingham").then((response) =>
      response.json().then((data) => {
        setFraminghamData(data);
        setLoading(true);
      })
    );
  }, []);
  console.log("framinghamData: ", framinghamData);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {loading && <Framingham framinghamData={framinghamData} />}
      </header>
    </div>
  );
}
export default App;

// import logo from "./logo.svg";
// import "./App.css";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>The current time is {currentTime}</p>
//       </header>
//     </div>
//   );
// }
// export default App;
