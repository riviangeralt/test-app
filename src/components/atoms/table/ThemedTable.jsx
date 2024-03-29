import { defineStyleConfig } from "@chakra-ui/react";

const Table = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      textTransform: "capitalize",
      letterSpacing: "normal",
      textAlign: "start",
      background: "gray.500",
    },
    td: {
      textAlign: "start",
      p: 3,
    },
    caption: {
      mt: 0,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  },
  // Styles for the size variations
  sizes: {
    md: {
      th: {
        fontSize: "16px",
        color: "#00000099",
      },
      tr: {
        border: "1px solid #ABABAB3D",
      },
      caption: {
        padding: 2,
      },
    },
  },
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Table;
