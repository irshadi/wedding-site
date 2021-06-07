import { useColorMode as _useColorMode } from "@chakra-ui/color-mode";

export const useColorMode = () => {
  const { colorMode, toggleColorMode } = _useColorMode();
  const COLOR_MODE_MAP = {
    DARK: "dark",
    LIGHT: "light"
  };

  const isUsingDarkMode = colorMode === COLOR_MODE_MAP.DARK;
  const theme = isUsingDarkMode ? "international" : "traditional";

  return {
    isUsingDarkMode,
    colorMode,
    toggleColorMode,
    theme
  };
};
