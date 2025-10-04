import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Header from "./components/Header/Header.js";
// import Home from "./Home";
// import NotFound from "./NotFound";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { ToasterContainer } from "baseui/toast/toaster.js";
const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ToasterContainer autoHideDuration={3000} />
        <Header />
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
