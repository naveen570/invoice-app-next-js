"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { Invoices, NewInvoice } from "@/db/schema";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const addInvoice = async (newInvoice: NewInvoice) => {
  const result = await db
    .insert(Invoices)
    .values(newInvoice)
    .returning({ invoiceId: Invoices.invoice_id });
  redirect(`/invoice/${result[0].invoiceId}`);
};
export const getInvoices = async () => {
  const result = await db.select().from(Invoices).orderBy(Invoices.createTs);
  return result;
};
export const getInvoiceById = async (invoiceId: number) => {
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.invoice_id, invoiceId));
  return result;
};
