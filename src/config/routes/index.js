import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer, Navbar, Preloader } from "../../component";
import { About, Home, Accomplishment, Covid } from "../../pages";
import "./main.css";

class Routes extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 0);
  }

  render() {
    return this.state.isLoading ? (
      <Preloader />
    ) : (
      <div className="main">
        <BrowserRouter>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/accomplishment" component={Accomplishment} />
              <Route path="/covid-info" component={Covid} />
            </Switch>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
