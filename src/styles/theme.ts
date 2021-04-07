import { extendTheme } from "@chakra-ui/react";
import { lighten } from "polished";

export const theme = extendTheme({
  colors: {
    gray: {
      "950": "#F5F8FA",
      "900": "#FFBA08",
      "899": lighten(0.4, "#FFBA08"),
      "850": "#1D1D1D",
      "700": "#000000",
      "600": "#47585B",
      "500": "#999999",
      "450": "#DADADA",

      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
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
