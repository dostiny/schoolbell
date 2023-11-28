import React from "react";
import "./App.css";
import User from "./pages/User";
import tw from "tailwind-styled-components";

function App() {
  return (
    <AppDiv>
      <User />
    </AppDiv>
  );
}

export default App;

const AppDiv = tw.div`flex flex-col items-center justify-start p-10`;
