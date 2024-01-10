import Link from "next/link";
import Image from "next/image";
//import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00283C] to-[#00fffb9b]">
      <div className="space-y-6">
        <div>
          <Image
            className="mx-auto h-10 w-auto"
            src={"/images/logo-blue.svg"}
            width={200}
            height={200}
            alt="Nuvento"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white drop-shadow-lg">
            Sign in to your account
          </h2>
        </div>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
