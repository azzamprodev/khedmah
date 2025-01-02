"use client";
import { SearchBar } from "./_components/search-bar";
import { ServiceList } from "./_components/services-list";
import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState(true);
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-grow flex-col gap-4">
        <section className="w-full">
          <SearchBar grid={grid} setGrid={setGrid} />
        </section>
        <section>
          <ServiceList grid={grid} setGrid={setGrid} />
        </section>
      </div>
    </div>
  );
}
