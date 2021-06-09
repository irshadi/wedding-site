import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { COLOR_MAP } from "../../constants/color";

const styles = {
  global: props => ({
    body: {
      color: mode(COLOR_MAP.BEIGE_TINT_1, COLOR_MAP.DARK_GRAY_SHADE_0)(props),
      bg: mode(COLOR_MAP.BEIGE_SHADE_0, COLOR_MAP.DARK_GRAY_TINT_2)(props)
    }
  })
};

const components = {
  Divider: {
    baseStyle: ({ colorMode }) => ({
      borderColor:
        colorMode === "dark"
          ? COLOR_MAP.DARK_GRAY_SHADE_0
          : COLOR_MAP.BEIGE_TINT_1
    })
  }
};

export default extendTheme({ styles, components });
