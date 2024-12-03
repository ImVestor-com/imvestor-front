import { type AppType } from "next/app";
import { Roboto } from "next/font/google";

import "~/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
