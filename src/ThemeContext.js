// @flow

import React from "react";
import type { Theme } from "./Theme";
import { mainTheme } from "./themes/main";

export const ThemeContext = React.createContext<Theme>(mainTheme);
