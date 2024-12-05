import {
  ArrowDownRight,
  ArrowRight,
  Briefcase,
  Compass,
  Globe,
  Handshake,
  Instagram,
  Linkedin,
  LogIn,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

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
        <div className="mt-2 flex flex-col items-center text-center">
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
          <h1 className="mt-24 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-6xl font-medium tracking-wide text-transparent">
            Why choose{" "}
            <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text">
              Im-vestor?
            </span>
          </h1>
          <div className="mt-8 p-6">
            <div className="mx-auto mb-6 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
              <div className="col-span-1 rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md md:col-span-2">
                <div className="flex flex-col">
                  <Compass className="mx-auto h-8 w-8 text-[#E5CD82] md:mx-0" />
                  <h2 className="mt-4 text-xl font-semibold text-[#E5CD82]">
                    Navigate your journey with Confidence
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Whether you&apos;re a seasoned investor or a first-time
                    entrepreneur, Im-Vestor provides resources to guide you
                    through each stage of your business or investment journey.
                  </p>
                </div>
              </div>
              <div className="col-span-1 rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md">
                <div className="flex flex-col">
                  <Handshake className="mx-auto h-8 w-8 text-[#E5CD82] md:mx-0" />
                  <h2 className="mt-4 text-xl font-semibold text-[#E5CD82]">
                    Smart Matching
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Our AI-powered algorithm ensures you find the most relevant
                    connections for your goals.
                  </p>
                </div>
              </div>

              <div className="row-span-1 rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md md:row-span-2">
                <div className="flex flex-col">
                  <Briefcase className="mx-auto h-8 w-8 text-[#E5CD82] md:mx-0" />
                  <h2 className="mt-4 text-xl font-semibold text-[#E5CD82]">
                    Seamless Negotiations
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Investors and entrepreneurs can communicate directly through
                    the platform, schedule meetings, and negotiate terms openly.
                    Both parties stay informed, building trust and
                    collaboration.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/images/home-diamond.svg"}
                  alt="Imvestor"
                  width={180}
                  height={180}
                />
              </div>

              <div className="rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md">
                <div className="flex flex-col">
                  <Zap className="mx-auto h-8 w-8 text-[#E5CD82] md:mx-0" />
                  <h2 className="mt-4 text-xl font-semibold text-[#E5CD82]">
                    Poke and Boost
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Guarantee special addons in order to help your grow your
                    profile.
                  </p>
                </div>
              </div>

              <div className="col-span-1 rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md md:col-span-2">
                <div className="flex flex-col">
                  <ShieldCheck className="mx-auto h-8 w-8 text-[#E5CD82] md:mx-0" />
                  <h2 className="mt-4 text-xl font-semibold text-[#E5CD82]">
                    Your Investments, Protected
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Im-Vestor prioritizes the safety of all users. We ensure all
                    projects and investors are thoroughly vetted, creating a
                    trusted environment for business to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <Image
              src="/images/bg-stars.png"
              alt="Stars Background"
              fill
              className="-z-10 object-cover opacity-50"
            />
            <h1 className="mx-4 mt-48 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-6xl font-medium tracking-wide text-transparent md:mx-0">
              Be part of the new Business{" "}
              <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text">
                Revolution
              </span>
            </h1>
            <h3 className="mt-4 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-2xl font-medium tracking-wide text-transparent">
              <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text">
                Select your path
              </span>{" "}
              and start your journey today!
            </h3>
            <div className="mt-8 p-6">
              <div className="mx-auto flex max-w-4xl flex-col justify-center gap-4 md:flex-row">
                <div className="flex flex-col items-center rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 px-6 py-32 backdrop-blur-md">
                  <Image
                    src={"/images/astronaut.png"}
                    alt="Imvestor"
                    width={64}
                    height={180}
                  />
                  <h2 className="mt-4 bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-xl font-semibold text-transparent">
                    ENTREPRENEUR
                  </h2>
                  <p className="mt-2 text-center text-gray-300">
                    Invest in your business and grow your company with the help
                    of our AI-powered matching algorithm.
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl border-2 border-white/10 bg-[#2D2F3D] bg-opacity-30 px-6 py-32 backdrop-blur-md">
                  <Image
                    src={"/images/rocket.png"}
                    alt="Imvestor"
                    width={82}
                    height={180}
                    className="mt-6"
                  />
                  <h2 className="mt-4 bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-xl font-semibold text-transparent">
                    INVESTOR
                  </h2>
                  <p className="mt-2 text-center text-gray-300">
                    Invest in your business and grow your company with the help
                    of our AI-powered matching algorithm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-48 flex w-full max-w-4xl flex-col justify-center gap-24 p-6 md:flex-row">
            <div className="w-full md:w-1/2">
              <h3 className="bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-4xl font-medium tracking-wide text-transparent">
                <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-transparent">
                  Join
                </span>{" "}
                us Now
              </h3>
              <p className="mt-8 max-w-96 text-2xl tracking-wide text-gray-300">
                Receive{" "}
                <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-transparent">
                  exclusive updates
                </span>{" "}
                and be notified first-hand when Vestor is launched, and receive
                a{" "}
                <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-transparent">
                  special gift
                </span>{" "}
                for being among the first 🎁.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-center justify-center rounded-2xl border-[1px] border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 text-center backdrop-blur-md">
                <Image
                  src={"/images/home-diamond.svg"}
                  alt="Imvestor"
                  width={32}
                  height={180}
                />
                <h3 className="mt-4 bg-gradient-to-r from-[#BFBFC2] via-[#FDFDFD] to-[#BFBFC2] bg-clip-text text-2xl font-medium tracking-wide text-transparent">
                  Take your special{" "}
                  <span className="bg-gradient-to-r from-[#E5CD82] via-[#C2AE72] to-[#978760] bg-clip-text text-transparent">
                    gift!
                  </span>
                </h3>
                <p className="mt-2 text-xs text-gray-300">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-[#F0D687] underline hover:opacity-70"
                  >
                    Create one
                  </Link>
                </p>
                <Input
                  className="mt-8"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  className="mt-4"
                  placeholder="Password"
                  type="password"
                />
                <div className="mt-4 flex w-full items-center justify-between">
                  <Link
                    href="/reset-password"
                    className="text-xs underline hover:opacity-70"
                  >
                    Forgot your password?
                  </Link>
                  <Button>
                    Login <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <footer className="mx-auto mt-32 w-full max-w-7xl px-12">
            <hr className="h-0.5 w-full bg-neutral-100 opacity-10" />
            <div className="my-auto flex h-32 w-full items-center gap-6 text-gray-500">
              <p>Follow us</p>
              <Link href={"#"} className="hover:opacity-70">
                <Linkedin className="ml-2 h-6 w-6" />
              </Link>
              <Link href={"#"} className="hover:opacity-70">
                <Instagram className="h-6 w-6" />
              </Link>
              <p>@Im-Vestor</p>
              <Link
                href={"mailto:media@Im-Vestor.com"}
                className="hover:opacity-70"
              >
                <p>media@Im-Vestor.com</p>
              </Link>
            </div>
            <hr className="h-0.5 w-full bg-neutral-100 opacity-10" />
            <div className="my-auto flex h-32 w-full items-center gap-6 text-gray-500">
              <Link href={"#"} className="hover:opacity-70">
                <p>Terms & Conditions</p>
              </Link>
              <p>© 2024 Im-Vestor. All rights reserved.</p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-700">
              The material presented via this website is for informational
              purposes only. Nothing in this website constitutes a solicitation
              for the purchase or sale of any financial product or service.
              Material presented on this website does not constitute a public
              offering of securities or investment management services in any
              jurisdiction. Investing in startup and early stage companies
              involves risks, including loss of capital, illiquidity, lack of
              dividends and dilution, and it should be done only as part of a
              diversified portfolio. The Investments presented in this website
              are suitable only for investors who are sufficiently sophisticated
              to understand these risks and make their own investment decisions.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
