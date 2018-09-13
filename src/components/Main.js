import React from "react";
import List from "./List";
import Map from "./Map";

const Main = ({ discoveriesDisplayed, mode, styles }) => {
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
};

export default Main;
