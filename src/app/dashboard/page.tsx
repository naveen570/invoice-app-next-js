import { InvoiceDetails } from "@/components/invoice/invoice-details";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
const Dashboard = () => {
  return (
    <main>
      <header className="flex justify-between flex-wrap py-4">
        <h1 className="font-semibold text-2xl md:text-3xl">Invoice</h1>
        <Button variant={"ghost"} asChild>
          <Link href="/invoice/new">
            <CirclePlus className="size-4" />
            Create Invoice
          </Link>
        </Button>
      </header>
      <Suspense fallback={<Loader />}>
        <InvoiceDetails />
      </Suspense>
    </main>
  );
};
export default Dashboard;
