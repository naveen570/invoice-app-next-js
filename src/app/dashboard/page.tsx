import { getInvoices } from "@/actions/invoices";
import { InvoiceRow } from "@/components/invoice/invoice-row";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

const Dashboard = async () => {
  const invoices = await getInvoices();
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.invoice_id} invoice={invoice} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
};
export default Dashboard;
