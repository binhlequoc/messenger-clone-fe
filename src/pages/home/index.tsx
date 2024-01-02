import { useAppSelector } from "@/hooks";
import { useEffect } from "react";

export default function HomePage() {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);
  return <div></div>;
}
