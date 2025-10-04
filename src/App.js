import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Header from "./components/Header/Header.js";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { ToasterContainer } from "baseui/toast/toaster.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import HomePage from "./components/Home/Home.jsx";

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ToasterContainer autoHideDuration={3000} />
        <Header />
        <Router>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
