import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

export const ServiceInfo = ({ serviceData }) => {
  const {
    title,
    description,
    price,
    profiles: { username, full_name },
    tags,
  } = serviceData;

  const parsedTags = JSON.parse(tags);

  return (
    <>
      <section className="flex flex-col gap-3 py-4 lg:flex-row-reverse">
        <section className="flex flex-col gap-3 lg:w-2/3">
          <div className="h-80 w-full rounded-lg bg-primary-foreground"></div>
          <div className="flex flex-col gap-2">
            <h1 className="text-right text-3xl font-bold">{title}</h1>
            <p className="line-clamp-2 text-right text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex justify-end gap-1">
            {!parsedTags
              ? ""
              : parsedTags.map((tag) => {
                  return <Badge key={tag}>{tag}</Badge>;
                })}
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>
                <h1 className="text-right text-2xl">وصف الخدمة</h1>
              </CardTitle>
              <CardDescription>
                <p className="text-right">{description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
        <section className="flex flex-col gap-3 lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h1 className="text-xl">{price}$</h1>
                  <h1 className="text-right text-2xl">السعر</h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Button className="w-full">اطلب الخدمة</Button>
                <Button className="w-full" variant="outline">
                  المفضله
                  <Heart />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className="text-right text-2xl">مقدم الخدمة</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-right">{full_name}</h1>
                <p className="text-right text-muted-foreground">@{username}</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </>
  );
};
