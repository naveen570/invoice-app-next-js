import { getInvoices } from "@/actions/invoices";
import { InvoiceRow } from "@/components/invoice/invoice-row";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export const InvoiceDetails = async () => {
  const invoices = await getInvoices();
  return (
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
    </Table>
  );
};
