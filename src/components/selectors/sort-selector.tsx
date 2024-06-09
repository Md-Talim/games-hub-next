"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOrders } from "@/lib/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortSelector = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateParams = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("ordering", value);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={(value: string) => updateParams(value)}>
      <SelectTrigger className="w-56 bg-licorice border border-codGray">
        <SelectValue placeholder="Relevance" />
      </SelectTrigger>
      <SelectContent className="text-silverCloud bg-licorice rounded-lg border border-codGray">
        <SelectGroup>
          <SelectLabel>Sort Orders</SelectLabel>
          {sortOrders.map((order) => (
            <SelectItem key={order.value} value={order.value}>
              {order.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
