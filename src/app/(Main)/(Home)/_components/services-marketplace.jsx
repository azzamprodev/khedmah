"use client";
import { cn } from "@/lib/utils";
import { SearchBar } from "./search-bar";
import { ServiceCardMain } from "./service-card-main";
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
            className={cn(
              "grid gap-2",
              grid ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
            )}
          >
            {servicesData.map((service) => {
              return (
                <ServiceCardMain
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  creator={service.profiles.full_name}
                  grid={grid}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
