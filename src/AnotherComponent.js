// @flow

import React from "react";
import { View, Text } from "react-native";
import withTheme from "./withTheme";

class AnotherComponent extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.background
        }}
      >
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: theme.sizes.headline
          }}
        >
          I am a dummy Text Youpi
        </Text>
      </View>
    );
  }
}

export default withTheme(AnotherComponent);
