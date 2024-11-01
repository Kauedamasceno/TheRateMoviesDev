import Link from "next/link";

type LogoProps = {
  Name: string;
};

const Logo = ({ Name }: LogoProps) => {
  return (
    <Link href="/" className="text-6xl font-bold max-lg:text-4xl">
      {Name}
    </Link>
  );
};

export default Logo;
