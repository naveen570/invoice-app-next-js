import { getInvoiceById } from "@/actions/invoices";
import React from "react";

const Invoice = async ({
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) => {
  const invoiceId = parseInt((await params).invoiceId);
  if (!invoiceId) return <div>no id</div>;
  const invoice = await getInvoiceById(invoiceId);
  return <pre>{JSON.stringify(invoice, null, 2)}</pre>;
};

export default Invoice;
