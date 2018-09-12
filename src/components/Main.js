import React, { Component } from "react";
import List from "./List";
import Map from "./Map";

class Main extends Component {
  state = {};
  render() {
    let { discoveriesDisplayed, mode, styles } = this.props;
    return (
      <main className="main-div">
        <List discoveriesDisplayed={discoveriesDisplayed} />
        <Map
          discoveriesDisplayed={discoveriesDisplayed}
          mode={mode}
          styles={styles}
        />
      </main>
    );
  }
}

export default Main;
