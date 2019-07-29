// @flow

import React from "react";
import { View as ReactView } from "react-native";
import withTheme from "./withTheme";

const generateStyle = (props, styles) => ({
  marginTop: props.mt !== undefined ? props.theme.spaces[props.mt] : 0,
  marginLeft: props.ml !== undefined ? props.theme.spaces[props.ml] : 0,
  paddingLeft: props.pl !== undefined ? props.theme.spaces[props.pl] : 0,
  ...styles,
  ...props.style
});

// Todo: change this to FC and use "useContext" hook in withTheme
const View = styles =>
  class extends React.Component {
    render() {
      return (
        <ReactView style={generateStyle(this.props, styles)}>
          {this.props.children}
        </ReactView>
      );
    }
  };

export default {
  View: styles => withTheme(View(styles))
};
