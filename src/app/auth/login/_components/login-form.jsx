"use client";
import { emailLogin } from "@/app/auth/login/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "/Users/azzamalzeidi/Documents/CODING/Projects/NextJs Projects/Khedmah/public/confirmAnimation.json";
import { useState } from "react";
import { OAuthButtons } from "./oauth";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
});

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const response = await emailLogin(data);
      if (response.success) {
        setEmailSent(true);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {emailSent ? (
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-right text-2xl text-green-500">تم الإرسال</h1>
              <Lottie animationData={animationData} loop={false} />
            </CardTitle>
            <CardDescription>
              <p className="text-right">
                تحقق من صندوق البريد الإلكتروني لديك واضغط على الرابط لتسجيل
                الدخول باستخدام الرابط السريع
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <a
              href="https://mail.google.com"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">صندوق البريد</Button>
            </a>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-right text-2xl">سجل الدخول</h1>
            </CardTitle>
            <CardDescription>
              <p className="text-right">
                ادخل البريد الالكتروني للتسجيل باستخدام الرابط السريع
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* OAuth */}
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <OAuthButtons />
            </div>
            <div className="my-6 flex items-center justify-center">
              <hr className="w-full border" />
              <span className="mx-4 text-gray-700">أو</span>
              <hr className="w-full border" />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-3"
              >
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <p className="text-right text-sm">البريد الالكتروني</p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-right text-sm"
                          placeholder="m@example.com"
                          type="email"
                          name="email"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.email?.message || error}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "إرسال الرابط"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </>
  );
};
