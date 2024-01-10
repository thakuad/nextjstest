import Image from "next/image";
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <Image
        className="mx-auto h-10 w-auto drop-shadow-2xl"
        src={"/images/logo-blue.svg"}
        width={200}
        height={200}
        alt="Nuvento"
      />
      <h1 className="text-xl font-semibold">{label}</h1>
    </div>
  );
};
