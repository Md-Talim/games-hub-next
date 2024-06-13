import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import GenreList from "@/components/genre-list";

const GenreMenu = () => (
  <Drawer direction="left">
    <DrawerTrigger className="flex items-center justify-center">
      <MenuIcon className="text-silverCloud" />
    </DrawerTrigger>
    <DrawerContent className="h-full w-[300px]">
      <section className="overflow-y-auto p-5">
        <GenreList isMobile />
      </section>
    </DrawerContent>
  </Drawer>
);

export default GenreMenu;
