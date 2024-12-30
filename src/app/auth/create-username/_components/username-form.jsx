"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUsername } from "@/app/auth/create-username/actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
});

export const UsernameForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
    },
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const response = await createUsername(data);
      if (response.success) {
        router.push("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-right text-2xl">إنشاء اسم المستخدم</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-right">
            يجب عليك إختيار اسم مستخدم للبدء في العمل على منصة خدمة
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-right">اسم المستخدم</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="اسم المستخدم"
                      type="text"
                      name="username"
                      className="text-right"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.username?.message || error}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "إِنشاء اسم المُستخدم"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
