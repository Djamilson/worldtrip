import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "950": "#F5F8FA",
      Highlight: "#FFBA08",
      "900": "#FFBA08",

      "850": "#FFBA08",

      Backgroud: "#1D1D1D",
      "700": "#000000",
      "600": "#47585B",

      Info: "#999999",
      "500": "#999999",

      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.950",
        color: "gray.50",
      },
    },
  },
});
