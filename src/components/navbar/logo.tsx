import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 select-none">
      <Image
        src="/logo.svg"
        width={36}
        height={36}
        alt="Logo"
        className="rounded-md"
      />
    </Link>
  );
};

export default Logo;
