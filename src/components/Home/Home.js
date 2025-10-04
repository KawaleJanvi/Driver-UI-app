import React    from "react";
import HomePage from "./Home.jsx";

class Home extends React.Component {
  render() {
    return HomePage.call(this);
  }
}

export default Home;
