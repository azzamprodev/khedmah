"use client";
import { cn } from "@/lib/utils";
import { SearchBar } from "./search-bar";
import { ServiceCard } from "./service-card";
import { useState } from "react";

export const ServicesMarketplace = ({ servicesData }) => {
  const [grid, setGrid] = useState(true);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-grow flex-col gap-4">
        <section className="w-full">
          <SearchBar grid={grid} setGrid={setGrid} />
        </section>
        <section>
          <div
            // className={cn(
            //   grid
            //     ? `grid gap-2 ${servicesData.length > 1 ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`
            //     : `grid grid-cols-1 gap-2`,
            // )}
            className={cn(
              "grid gap-2",
              grid ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
              grid && servicesData.length > 1
                ? "grid-cols-2 lg:grid-cols-1"
                : "grid-cols-1",
            )}
          >
            {servicesData.map((service) => {
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  creator={service.profiles.full_name}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
