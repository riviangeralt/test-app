import { defineStyleConfig } from "@chakra-ui/react";

const ThemedTextarea = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    border: "1px solid #ABABAB",
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    outline: {
      border: "1px solid #ABABAB",
      background: "gray.500",
      // color: "#ffffff",

      _focusVisible: {
        borderColor: "none",
        boxShadow: "none",
      },

      _placeholder: {
        color: "#ABABAB",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default ThemedTextarea;
