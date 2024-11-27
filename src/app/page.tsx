import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className=" grid place-content-center justify-items-center gap-2 font-bold h-screen">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Invoice Generator
        </h1>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </main>
    </div>
  );
}
