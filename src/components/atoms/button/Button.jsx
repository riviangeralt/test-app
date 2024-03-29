import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    solid: {
      backgroundColor: "brand.500",
      color: "#ffffff",
      fontWeight: 400,
      _hover: {
        backgroundColor: "brand.600",
        _disabled: {
          backgroundColor: "brand.600",
        },
      },
      _active: {
        backgroundColor: "brand.700",
      },
      _loading: {
        backgroundColor: "brand.600",
        _hover: {
          backgroundColor: "brand.600",
        },
      },
    },
    secondary: {
      backgroundColor: "gray.500",
      color: "#1870E8",
      fontWeight: 400,
      _hover: {
        backgroundColor: "rgba(24, 112, 232, 0.08)",
        _disabled: {
          backgroundColor: "rgba(24, 112, 232, 0.08)",
          color: "#1870E8",
        },
      },
      _active: {
        backgroundColor: "rgba(24, 112, 232, 0.08)",
      },
    },
    "outline-secondary": {
      border: "1px solid #ABABAB3D",
      fontWeight: 400,
      color: "gray.600",
      paddingInline: 6,
    },
    "secondary-ghost": {
      backgroundColor: "gray.500",
      color: "rgba(40, 48, 63, 0.6)",
      fontWeight: 400,
      _hover: {
        backgroundColor: "rgba(24, 112, 232, 0.08)",
        _disabled: {
          backgroundColor: "rgba(24, 112, 232, 0.08)",
        },
      },
      _active: {
        backgroundColor: "rgba(24, 112, 232, 0.08)",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Button;
