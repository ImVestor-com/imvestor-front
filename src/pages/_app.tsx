import { type AppType } from "next/app";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "~/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Imvestor | Sign Up</title>
          <meta name="description" content="Imvestor" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
