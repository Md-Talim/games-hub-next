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
import { platforms } from "@/lib/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PlatformSelector = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateParams = (platformId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("parent_platforms", platformId);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={(value: string) => updateParams(value)}>
      <SelectTrigger className="w-56 bg-licorice border border-codGray">
        <SelectValue placeholder="Platform" />
      </SelectTrigger>
      <SelectContent className="text-silverCloud bg-licorice rounded-lg border border-codGray">
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>

          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.id.toString()}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
