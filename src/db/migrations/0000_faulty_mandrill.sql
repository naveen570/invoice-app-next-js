CREATE TYPE "public"."status" AS ENUM('open', 'closed', 'completed');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"invoice_id" serial NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	"value" real DEFAULT 0 NOT NULL,
	"description" text NOT NULL,
	"status" "status" NOT NULL
);
