// @flow

import React from "react";
import { Text } from "react-native";
import withTheme from "./withTheme";
import styled from "./styled";

const Box = styled.View();

class AnotherComponent extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <Box mt={1} pl={1}>
        <Text
          style={{
            color: theme.colors[1]
          }}
        >
          I am a dummy Text Youpi
        </Text>
      </Box>
    );
  }
}

export default withTheme(AnotherComponent);
