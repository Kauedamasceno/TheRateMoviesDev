import DecksHome from "@/components/DecksHome/DecksHome";
import OutDoor from "@/components/OutDoor/outDoor";

export default function Home() {
  console.log("server");
  return (
    <div className="">
      <OutDoor />
      <DecksHome />
    </div>
  );
}
