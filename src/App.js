// @flow

import React from "react";
import { mainTheme } from "./themes/main";
import { ThemeContext } from "./ThemeContext";
import FancyComponent from "./FancyComponent";
import { secondTheme } from "./themes/second";

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={secondTheme}>
        <FancyComponent />
      </ThemeContext.Provider>
    );
  }
}
