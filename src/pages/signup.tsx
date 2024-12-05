import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export default function SignUp() {
  const [accountType, setAccountType] = useState<"individual" | "group" | null>(
    null,
  );

  const router = useRouter();

  const handleNext = async () => {
    if (accountType === "individual") {
      await router.push(`signup-individual`);
    } else if (accountType === "group") {
      await router.push(`signup-group`);
    }
  };

  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="rounded-2xl border-4 border-white/10 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md">
          <h2 className="mt-4 text-center text-4xl font-semibold">
            Choose your <span className="text-[#E5CD82]">account type</span>
          </h2>
          <p className="mt-4 text-center">
            Individual or Group, Personalize Your Journey with Us.
          </p>
          <div className="mt-10 flex max-w-4xl items-center justify-center gap-4">
            <button
              onClick={() => setAccountType("individual")}
              className={`flex h-40 w-full flex-col items-center justify-center rounded-2xl border-2 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md hover:opacity-75 ${
                accountType === "individual" ? "border-[#E5CD82]" : ""
              }`}
            >
              <Image
                src="images/individual.svg"
                alt="Individual"
                width={64}
                height={64}
              />
              <h3 className="mt-2 text-center text-xl font-semibold">
                Individual
              </h3>
            </button>
            <button
              onClick={() => setAccountType("group")}
              className={`flex h-40 w-full flex-col items-center justify-center rounded-2xl border-2 bg-[#2D2F3D] bg-opacity-30 p-6 backdrop-blur-md hover:opacity-75 ${
                accountType === "group" ? "border-[#E5CD82]" : ""
              }`}
            >
              <Image
                src="images/vc-group.svg"
                alt="Individual"
                width={80}
                height={80}
                className="mt-1"
              />
              <h3 className="mt-2 text-center text-xl font-semibold">
                VC Group
              </h3>
            </button>
          </div>

          <Button
            className="mt-10 w-full"
            disabled={!accountType}
            onClick={handleNext}
          >
            Next <ArrowRight />
          </Button>

          <p className="mt-8 text-sm">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-[#F0D687] underline hover:opacity-70"
            >
              <span className="text-[#F0D687] underline hover:opacity-70">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
