// @flow

import React from "react";
import { ThemeContext } from "./ThemeContext";

export default function withTheme(WrappedComponent) {
  // Todo: Check why hooks are not working on this case
  // if (typeof WrappedComponent === "function") {
  //   return props => {
  //     const theme = React.useContext(ThemeContext);
  //     return <WrappedComponent theme={theme} {...props} />;
  //   };
  // }
  return class extends React.Component {
    static contextType = ThemeContext;

    render() {
      return <WrappedComponent theme={this.context} {...this.props} />;
    }
  };
}
