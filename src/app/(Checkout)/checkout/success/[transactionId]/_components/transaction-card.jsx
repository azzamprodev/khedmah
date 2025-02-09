"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Lottie from "lottie-react";
import animationData from "/Users/azzamalzeidi/Documents/CODING/NextJs/Khedmah/public/confirmAnimation.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TransactionCard = ({ transactionId }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Lottie animationData={animationData} loop={false} />
          <h1 className="text-center text-2xl">تمت العملية بنجاح</h1>
        </CardTitle>
        <CardDescription>
          <p className="text-center">تم إكمال معاملتك بنجاح</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 rounded-md bg-primary-foreground px-2 py-4 text-center">
          <h1 className="text-lg font-bold text-muted-foreground">
            رقم المعاملة
          </h1>
          <p className="text-sm">{transactionId}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={"/"} className="w-full">
          <Button className="w-full">
            <h1>العودة للصفحة الرئيسية</h1>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
