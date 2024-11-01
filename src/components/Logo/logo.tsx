type LogoProps = {
  Name: string;
};

const Logo = ({ Name }: LogoProps) => {
  return <h1 className='text-6xl'>{Name}</h1>;
};

export default Logo;
