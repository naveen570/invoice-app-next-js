"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { addInvoice } from "@/actions/invoices";
import { Loader } from "lucide-react";

const addInvoiceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  value: z
    .number()
    .min(1, "Value is required")
    .refine((v) => v > 10, "Value must be greater than 10"),
  description: z.string().optional(),
});
type AddInvoiceForm = z.infer<typeof addInvoiceSchema>;
export const AddInvoice = () => {
  const form = useForm<AddInvoiceForm>({
    resolver: zodResolver(addInvoiceSchema),
    defaultValues: {
      name: "",
      email: "",
      value: 0,
    },
  });
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: AddInvoiceForm) => {
    await addInvoice({
      value: data.value,
      description: data.description ?? "",
      status: "open",
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          rules={{}}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your value"
                  {...field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.onChange(Number(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          rules={{}}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="animate-spin">
              <Loader />
            </span>
          ) : null}
          Submit
        </Button>
      </form>
    </Form>
  );
};
