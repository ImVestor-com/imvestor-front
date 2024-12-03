import { ArrowDownRight, Globe, LogIn } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imvestor</title>
        <meta name="description" content="Imvestor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-64 min-h-screen">
        <header className="m-6 flex justify-end gap-2">
          <Button
            size="icon"
            variant="outline"
            className="border-2 border-white/10"
          >
            <Globe className="h-6 w-6" />
          </Button>
          <Button variant="outline" className="border-2 border-white/10">
            <LogIn className="h-6 w-6" />
            Sign In
          </Button>
        </header>
        <div className="mt-2 flex flex-col items-center">
          <Image
            src="/logo/imvestor.png"
            alt="Imvestor"
            width={64}
            height={64}
          />
          <h3 className="mt-2 text-2xl font-medium">Im-Vestor</h3>
          <h1 className="mt-8 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-6xl font-medium tracking-wide text-transparent">
            We mean Business!
          </h1>
          <h1 className="mt-4 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-2xl font-medium text-transparent">
            Connecting entrepreneurs and investors
          </h1>
          <Button className="mt-8 rounded-full hover:opacity-75">
            Get Started <ArrowDownRight />
          </Button>
          <hr className="mt-20 h-0.5 w-full max-w-4xl rounded-full bg-neutral-100 opacity-20" />
          <div className="relative mt-20">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
            <Image
              src="/images/home-video.png"
              className="relative"
              alt="Imvestor"
              width={240}
              height={240}
            />
          </div>
          <h1 className="mt-12 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-6xl font-medium tracking-wide text-transparent">
            Why choose{" "}
            <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text">
              Im-vestor?
            </span>
          </h1>
          <div>
            <div className="p-6 mt-8">
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-800/50 p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10">
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-yellow-500">
                      Navigate your journey with Confidence
                    </h2>
                    <p className="text-sm text-gray-300">
                      Whether you&apos;re a seasoned investor or a first-time
                      entrepreneur, Im-Vestor provides resources to guide you
                      through each stage of your business or investment journey.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-800/50 p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10">
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-yellow-500">
                      Smart Matching
                    </h2>
                    <p className="text-sm text-gray-300">
                      Our AI-powered algorithm ensures you find the most
                      relevant connections for your goals.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-800/50 p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10">
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-yellow-500">
                      Seamless Negotiations
                    </h2>
                    <p className="text-sm text-gray-300">
                      Investors and entrepreneurs can communicate directly
                      through the platform, schedule meetings, and negotiate
                      terms openly. Both parties stay informed, building trust
                      and collaboration.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-800/50 p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10">
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-yellow-500">
                      Poke and Boost
                    </h2>
                    <p className="text-sm text-gray-300">
                      Guarantee special addons in order to help your grow your
                      profile.
                    </p>
                  </div>
                </div>

                <div className="col-span-2 rounded-2xl bg-gray-800/50 p-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10">
                      <svg
                        className="h-5 w-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-yellow-500">
                      Your Investments, Protected
                    </h2>
                    <p className="text-sm text-gray-300">
                      Im-Vestor prioritizes the safety of all users. We ensure
                      all projects and investors are thoroughly vetted, creating
                      a trusted environment for business to thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
