import {
  pgTable,
  real,
  serial,
  timestamp,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
export const statusEnum = pgEnum("status", ["open", "closed", "completed"]);
export const Invoices = pgTable("invoices", {
  invoice_id: serial("invoice_id").primaryKey(),
  create_ts: timestamp("create_ts").defaultNow().notNull(),
  value: real("value").default(0).notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull(),
});
export const InvoicesInsert = createInsertSchema(Invoices);
export const InvoicesSelect = createSelectSchema(Invoices);
export type NewInvoice = z.infer<typeof InvoicesInsert>;
export type Invoice = z.infer<typeof InvoicesSelect>;
