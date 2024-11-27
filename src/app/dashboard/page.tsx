import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
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
type Invoice = {
  date: string;
  customer: string;
  email: string;
  status: "open" | "closed" | "completed";
  value: string;
};

const invoices: Invoice[] = [
  {
    date: "INV001",
    customer: "Paid",
    email: "$250.00",
    status: "open",
    value: "$250.00",
  },
  {
    date: "INV002",
    customer: "Pending",
    email: "$150.00",
    status: "closed",
    value: "$250.00",
  },
  {
    date: "INV003",
    customer: "Unpaid",
    email: "$350.00",
    status: "completed",
    value: "$250.00",
  },
];
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-24">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.date}>
              <TableCell className="font-medium">{invoice.date}</TableCell>
              <TableCell className="font-medium">{invoice.customer}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="text-center">
                <StatusBadge variant={invoice.status}>
                  {invoice.status}
                </StatusBadge>
              </TableCell>
              <TableCell className="text-right">{invoice.value}</TableCell>
            </TableRow>
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
