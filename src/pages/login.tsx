import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Eye } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      console.log("mutation");

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = (await response.json()) as LoginResponse;
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });


  return (
    <>
      <Head>
        <title>Imvestor | Login</title>
        <meta name="description" content="Imvestor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/images/login-image.png" // Add your image here
            alt="Login"
            className="h-screen w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>

        {/* Right side - Login form */}
        <div className="flex w-full items-center justify-center px-8 lg:w-1/2">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-3xl font-bold text-[#E5CD82]">Login</h2>
              <p className="mt-2 text-sm text-gray-300">
                Please sign in to your account
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutation.mutate();
              }}
              className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="bg-[#282B37] p-4 placeholder:text-white"
                  />
                </div>
                <div className="relative">
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="mt-4 bg-[#282B37] p-4 placeholder:text-white"
                  />
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-white"
                  />
                </div>
              </div>

              <p className="text-end text-xs text-gray-300">
                <Link
                  href="/forgot-password"
                  className="underline hover:opacity-70"
                >
                  Forgot your password?
                </Link>
              </p>

              <Button type="submit" className="w-full">
                Login <ArrowRight />
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500">Or continue with</span>
              </div>

              <div className="mt-6 flex justify-center gap-6">
                <button className="inline-flex justify-center rounded-full border border-gray-300 bg-white p-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-200">
                  <Image
                    className="h-4 w-4"
                    src="/images/google.png"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="inline-flex justify-center rounded-full border border-gray-300 bg-white p-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-200">
                  <Image
                    className="h-4 w-4"
                    src="/images/apple.png"
                    alt="Apple"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="inline-flex justify-center rounded-full border border-gray-300 bg-white p-3 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <Image
                    className="h-4 w-4"
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <p className="mt-8 text-center text-xs">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline hover:opacity-70">
                  <span className="text-[#F0D687] underline hover:opacity-70">
                    Create one
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
