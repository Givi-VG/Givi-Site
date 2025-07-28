import React from "react";
import Routes from "./Routes";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Routes />
      <SpeedInsights />
    </>
  );
}

export default App;
