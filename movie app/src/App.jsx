import React, { useState } from "react";
import Movies from "./components/movies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./Screenshot 2023-03-07 at 17-14-20 Logo Maker Used By 2.3 Million Startups.png"
              alt="Logo"
              width="50"
              height="50"
              boarder-radius="50%"
              className="d-inline-block align-text-center mr-1"
            />
            <span className="ml-1">Dev_Imran</span>
          </a>
        </div>
      </nav>
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
