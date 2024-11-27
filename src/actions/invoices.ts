"use server";

import { db } from "@/db";
import { Invoices, NewInvoice } from "@/db/schema";
export const addInvoice = async (newInvoice: NewInvoice) => {
  const result = await db.insert(Invoices).values(newInvoice);
  console.log(result.rowCount);
  return result.rowCount;
};
