import Image from "next/image";
import { useApp } from "../../context/AppContext";
import SideProfileCard from "@/components/page/sideprofilecard/index";
import SideFollowCard from "@/components/page/sidefollowcard/index";

export default function Home() {
  const { user, setUser } = useApp();

  return (
    <>
      <div className="hidden md:block ml-3 w-[300px] fixed">
        <SideProfileCard />
        <SideFollowCard />
      </div>
      <div
        onClick={() => setUser({ ...user, firstName: "Muhammet" })}
        className="flex justify-center"
      >
        <div className="w-6/12">
          aaaaaaaaaaaaaaaaa
          {user.firstName}
        </div>
      </div>
    </>
  );
}
