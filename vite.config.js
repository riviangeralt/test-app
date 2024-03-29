import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
        // manualChunks: (id) => {
        //   if (id.includes("node_modules")) {
        //     const vendorMap = {
        //       "@chakra-ui": "vendor_chakra",
        //       recharts: "vendor_recharts",
        //       "react-select": "vendor_react_select",
        //       dayzed: "vendor_dayzed_datepicker",
        //       router: "vendor_react_router",
        //       "react-hook-form": "vendor_react_hook_form",
        //       axios: "vendor_axios",
        //       framer: "vendor_framer",
        //       emotion: "vendor_emotion",
        //       // "react": "vendor_react",
        //     };

        //     for (const substring in vendorMap) {
        //       if (id.includes(substring)) {
        //         return vendorMap[substring];
        //       }
        //     }

        //     // Handle the case when none of the substrings match
        //     return "unknown_vendor";
        //   }
        // },
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
