import React, { Component } from "react";
import List from "./List";
import Map from "./Map";

class Main extends Component {
  state = {};
  render() {
    let { discoveriesDisplayed, mode, styles } = this.props;
    return (
      <main className="main-div">
        <Map
          discoveriesDisplayed={discoveriesDisplayed}
          mode={mode}
          styles={styles}
        />
        <List discoveriesDisplayed={discoveriesDisplayed} />
      </main>
    );
  }
}

export default Main;
