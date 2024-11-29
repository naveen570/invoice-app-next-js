"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <main className="grid h-screen place-content-center justify-items-center gap-4">
      <h2 className="text-3xl md:text-4xl font-semibold">{error.message}</h2>
      <Button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Back to home
      </Button>
    </main>
  );
}
