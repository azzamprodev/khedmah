"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ServiceCardMain = ({
  // edit so the data is extracted on the component only
  id,
  title,
  description,
  price,
  creator,
  grid,
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 rounded-xl border bg-card p-3 text-card-foreground shadow",
        grid ? "flex-col" : "",
      )}
    >
      {/* preview section */}
      <section className={cn(grid ? "" : "w-1/2 lg:w-1/4")}>
        <div className="h-40 w-full rounded-lg bg-primary-foreground"></div>
      </section>

      {/* information section */}
      <section
        className={cn(
          "flex h-full flex-col justify-between",
          grid ? "" : "w-1/2 lg:w-3/4",
        )}
      >
        {/* title and description */}
        <section className="flex w-full flex-grow flex-col gap-1">
          <Link
            href={`/services/${id}`}
            className="truncate text-right font-semibold md:text-lg"
          >
            {title}
          </Link>
          <p className="line-clamp-2 text-right text-sm text-muted-foreground">
            {description}
          </p>
        </section>

        {/* creator and price */}
        <section className="mt-5 flex justify-between">
          <p className="text-lg font-bold">{price}$</p>
          <p className="text-muted-foreground">{creator}</p>
        </section>
      </section>
    </div>
  );
};
