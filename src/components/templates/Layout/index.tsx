import { PATH } from "@/constants";
import { getMe } from "@/feature/user/userAction";
import { useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getMe()).then(() => {
        navigator(PATH.HOME);
      });
    } else {
      navigator(PATH.SIGN_IN);
    }
  }, [token]);

  return (
    <>
      <Outlet />
    </>
  );
}
