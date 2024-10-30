type LogoProps = {
  Name: string;
};

const Logo = ({ Name }: LogoProps) => {
  return <h1>{Name}</h1>;
};

export default Logo;
