import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { PhoneInput } from "~/components/ui/phone-input";

export default function SignUpGroup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const router = useRouter();

  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="min-w-96 rounded-2xl border-4 border-white/10 bg-[#181920] bg-opacity-30 p-6 backdrop-blur-md">
          <button
            className="flex items-center gap-2 hover:opacity-75"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <h2 className="mt-8 text-center text-4xl font-semibold">
            Your account as <br />
            <span className="text-[#E5CD82]">Investor</span>
          </h2>

          <Input
            className="mt-10"
            placeholder="Full Name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <Input
            className="mt-4"
            placeholder="Professional Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <PhoneInput
            className="mt-4"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />

          <Button
            disabled={data.password !== data.confirmPassword}
            className="mt-10 w-full"
          >
            Next <ArrowRight />
          </Button>
        </div>
      </main>
    </>
  );
}
