import LeftProfile from "@/components/component/LeftProfile";
import RightInfo from "@/components/component/RightInfo";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
        <LeftProfile />
        <RightInfo />
    </div>
  );
}
