"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createTransaction } from "../../actions";

export const CheckoutForm = ({ serviceData }) => {
  const { id: serviceId } = serviceData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const clientData = {
        name: data.name,
        email: data.email,
      };

      const response = await createTransaction(clientData, serviceId);

      if (response.success) {
        console.log(response.message);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-right text-2xl">بيانات الطلب</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-right">يرجى تقديم بياناتك للمتابعة في الطلب</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full flex-col gap-2"
          >
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-right text-sm">الاسم</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full text-right text-sm"
                      placeholder="الاسم"
                      type="name"
                      name="name"
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-right text-sm">البريد الإلكتروني</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full text-right text-sm"
                      placeholder="البريد الإلكتروني"
                      type="email"
                      name="email"
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
            <FormMessage>
              {form.formState.errors.email?.message || error}
            </FormMessage>
            <Button type="submit" className="mt-4 w-full">
              {loading ? <Loader2 className="animate-spin" /> : "طلب"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
