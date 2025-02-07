import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star } from "lucide-react";

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
      {/* Main wrapper */}
      <section className="flex flex-col gap-3 py-4 lg:flex-row-reverse">
        {/* Right section - photo, text & tags, and service description */}
        <section className="flex flex-col lg:w-2/3">
          {/* Hero photo */}
          <div className="h-80 w-full rounded-lg bg-primary-foreground"></div>

          {/* Hero text */}
          <div className="mt-4 flex flex-col gap-5">
            <h1 className="text-right text-4xl font-bold">{title}</h1>
            <p className="line-clamp-2 text-right text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex justify-end gap-1 py-5">
            {!parsedTags
              ? ""
              : parsedTags.map((tag) => {
                  return <Badge key={tag}>{tag}</Badge>;
                })}
          </div>

          {/* Service description */}
          <Card>
            <CardHeader>
              <CardTitle>
                <h1 className="text-right text-3xl">وصف الخِدمة</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text text-right text-muted-foreground">
                {description}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Left section - price and creator cards */}
        <section className="flex flex-col gap-3 lg:w-1/3">
          {/* Pricing card */}
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <h1 className="text-2xl">{price}$</h1>
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

          {/* Creator card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="ml-1 text-muted-foreground">(124)</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div>
                    <h1 className="text-right">{full_name}</h1>
                    <p className="text-right text-muted-foreground">
                      @{username}
                    </p>
                  </div>
                  <Avatar>
                    <AvatarFallback>KH</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>
      </section>
      {/* <div className="flex items-center justify-center gap-1 pb-2 text-sm text-muted-foreground">
        <span className="text-lg text-primary">خِدمَة</span>
        <h1>من قبل</h1>
        <Heart className="inline h-4 w-4 fill-red-500 text-red-500" />
        <h1>صنع بكل </h1>
      </div> */}
    </>
  );
};
