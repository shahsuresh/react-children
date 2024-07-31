import React from "react";
import "./App.css";
import ShowName from "./components/ShowName";

const App = () => {
  return (
    <div>
      <ShowName userName='Suresh'>
        <p>I Live at Janakpur</p>
      </ShowName>
    </div>
  );
};

export default App;
