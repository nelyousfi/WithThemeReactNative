// @flow

import React from "react";
import { ThemeContext } from "./ThemeContext";

export default function withTheme(WrappedComponent) {
  return class extends React.Component {
    static contextType = ThemeContext;

    render() {
      return <WrappedComponent theme={this.context} {...this.props} />;
    }
  };
}
