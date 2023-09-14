import { Lato } from "@next/font/google";

const sans = Lato({
  variable: "--font-sans",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const variables = [sans.variable];

export default variables;
