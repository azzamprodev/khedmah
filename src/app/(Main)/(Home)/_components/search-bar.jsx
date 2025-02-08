"use client";
import { Input } from "@/components/ui/input";
import { AlignJustify, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

export const SearchBar = ({ grid, setGrid }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-0.5 rounded-lg bg-primary-foreground p-1">
        <button
          className={cn(
            "inline-flex h-9 items-center justify-center rounded-md px-3 py-1 text-sm",
            grid ? "bg-primary" : "",
          )}
          onClick={() => setGrid(true)}
        >
          <LayoutGrid
            strokeWidth={1.5}
            className={cn(grid ? "text-primary-foreground" : "")}
          />
        </button>
        <button
          className={cn(
            "inline-flex h-9 items-center justify-center rounded-md px-3 py-1 text-sm",
            grid ? "" : "bg-primary",
          )}
          onClick={() => setGrid(false)}
        >
          <AlignJustify
            strokeWidth={1.5}
            className={cn(grid ? "" : "text-primary-foreground")}
          />
        </button>
      </div>
      <Input placeholder="إبحث عن خدمة" className="py-5 text-right" />
    </div>
  );
};
