import { getInvoiceById } from "@/actions/invoices";
import { StatusBadge } from "@/components/ui/status-badge";
import React from "react";
export const revalidate = 60;
// export const dynamicParams = true;
// export async function generateStaticParams() {
//   const invoices = await getInvoices();
//   return invoices.map((invoice) => ({
//     invoiceId: String(invoice.invoice_id),
//   }));
// }
const Invoice = async ({
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) => {
  const invoiceId = parseInt((await params).invoiceId);
  if (!invoiceId || isNaN(invoiceId)) {
    throw new Error("Invalid invoice id");
  }
  const invoice = await getInvoiceById(invoiceId);
  if (!invoice) throw new Error("Invoice not found");
  return (
    <main className="my-4 space-y-8">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Invoice {invoice.invoice_id}
        </h1>
        <StatusBadge variant={invoice.status}>{invoice.status}</StatusBadge>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium">${invoice.value.toFixed(2)}</h3>
        <p className="text-sm leading-relaxed">{invoice.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Billing Details</h3>
        <div className="grid grid-cols-2 gap-3 max-w-sm">
          <p>Invoice Id</p>
          <p>{invoice.invoice_id}</p>
          <p>Date</p>
          <p>{invoice.createTs.toLocaleDateString()}</p>
          <p>Customer</p>
          <p>-</p>
          <p>Email</p>
          <p>-</p>
        </div>
      </div>
    </main>
  );
};

export default Invoice;
