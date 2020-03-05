import React, { Fragment } from "react";

import Routes from "./routes";
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => (
  <Fragment>
    <NavBar />
    <Routes />
    <Footer />
  </Fragment>
);

export default App;
