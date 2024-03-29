import { extendTheme } from "@chakra-ui/react";
import {
  Button,
  ThemedInput,
  ThemedTable,
  Modal,
  ThemedTextarea,
} from "src/components/atoms";

const extendedTheme = extendTheme({
  colors: {
    brand: {
      700: "#CD1818", //active
      600: "#CD1818", //hover
      500: "#EF0A0A", //actual,
      300: "rgba(239, 10, 10, 0.08)",
    },
    gray: {
      700: "#28303F",
      600: "#5D5C63",
      500: "#F1F2F8",
    },
    green: {
      500: "#0E875C",
      300: "rgba(14, 135, 92, 0.4)",
      100: "rgba(14, 135, 92, 0.08)",
    },
    yellow: {
      500: "#DEB110",
      300: "rgba(239, 183, 39, 0.4)",
      100: "rgba(239, 183, 39, 0.08)",
    },
    orange: {
      500: "#DA6F0D",
      300: "rgba(218, 111, 13, 0.4)",
      100: "rgba(218, 111, 13, 0.08)",
    },
    blue: {
      500: "#0A68E7",
      300: "rgba(10, 104, 231, 0.4)",
      100: "rgba(10, 104, 231, 0.08)",
    },
    violet: {
      500: "#721FDC",
      300: "rgba(114, 31, 220, 0.4)",
      100: "rgba(114, 31, 220, 0.08)",
    },
  },
  components: {
    Button,
    Table: ThemedTable,
    Input: ThemedInput,
    Textarea: ThemedTextarea,
    Modal,
  },
  breakpoints: {
    sm: "280px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default extendedTheme;
