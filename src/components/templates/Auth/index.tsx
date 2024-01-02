import { useState } from "react";
import SignIn from "@/components/molecules/form/signIn";

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  return <SignIn />;
}
