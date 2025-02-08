import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const ServiceCard = ({ serviceData }) => {
  const {
    title,
    description,
    price,
    profiles: { username, full_name },
  } = serviceData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {/* Hero text */}
          <div className="flex justify-between">
            <h1 className="text-3xl">{price}$</h1>
            <h1 className="text-right text-2xl">{title}</h1>
          </div>
        </CardTitle>
        <CardDescription>
          <p className="line-clamp-3 text-right">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Creator Details */}
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-end gap-2">
            <div>
              <h1 className="text-right">{full_name}</h1>
              <p className="text-right text-muted-foreground">@{username}</p>
            </div>
            <Avatar>
              <AvatarFallback>KH</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
