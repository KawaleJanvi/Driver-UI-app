import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Header from "./components/Header/Header.js";
// import Home from "./Home";
// import NotFound from "./NotFound";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, DarkTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
const engine = new Styletron();
function App() {
  return (
      <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
    <Header/>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
