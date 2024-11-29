"use client";

import { Invoice } from "@/db/schema";
import { StatusBadge } from "../ui/status-badge";
import { TableCell, TableRow } from "../ui/table";
import { useRouter } from "next/navigation";

export const InvoiceRow = ({ invoice }: { invoice: Invoice }) => {
  const router = useRouter();
  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => {
        router.push(`/invoice/${invoice.invoice_id}`);
      }}
    >
      <TableCell className="font-medium">
        {invoice.createTs.toString()}
      </TableCell>
      <TableCell className="font-medium">{invoice.invoice_id}</TableCell>
      <TableCell>{invoice.status}</TableCell>
      <TableCell className="text-center">
        <StatusBadge variant={invoice.status}>{invoice.status}</StatusBadge>
      </TableCell>
      <TableCell className="text-right">${invoice.value}</TableCell>
    </TableRow>
  );
};
