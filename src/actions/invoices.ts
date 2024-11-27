"use server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { Invoices, NewInvoice } from "@/db/schema";
export const addInvoice = async (newInvoice: NewInvoice) => {
  const result = await db.insert(Invoices).values(newInvoice);
  console.log(result.rowCount);
  return result.rowCount;
};
export const getInvoices = async () => {
  const result = await db.select().from(Invoices).orderBy(Invoices.createTs);
  return result;
};
export const getInvoiceById = async (invoiceId: number) => {
  const result = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.invoice_id, invoiceId));
  return result;
};
