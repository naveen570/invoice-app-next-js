import { AddInvoice } from "@/components/invoices/add-invoice";
import React from "react";

const InvoiceNew = async () => {
  return (
    <main>
      <header className="py-4 flex flex-col gap-2 font-semibold">
        <p className="text-xs">invoices</p>
        <h1 className="text-2xl md:text-3xl">Create a New Invoice</h1>
      </header>
      <AddInvoice />
    </main>
  );
};

export default InvoiceNew;
