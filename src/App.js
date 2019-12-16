import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdvertisingList from "./components/AdvertisingList";
import AdvertisingDetail from "./components/AdvertisingDetail";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/dvertisinglist" component={AdvertisingList} />
          <Route exact path="/detail/:id" component={AdvertisingDetail} />
        </Router>
      </Provider>
      <Footer />
    </>
  );
}

export default App;
