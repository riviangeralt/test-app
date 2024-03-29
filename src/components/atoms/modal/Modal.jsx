import { defineStyleConfig } from "@chakra-ui/react";

const Modal = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    brand: {
      overlay: {
        bg: "rgba(20, 20, 20, 0.4)",
      },
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        borderRadius: "8px",
        overflow: "hidden",
        margin: 0,
      },
      header: {
        bg: "brand.500",
        color: "#FFF",
      },
      // closeButton: baseStyleCloseButton,
      body: {
        p: 4,
      },
      // footer: baseStyleFooter,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Modal;
