import { PATH } from "@/constants";
import { getMe } from "@/feature/user/userAction";
import { useAppDispatch } from "@/hooks";
import { socket } from "@/utils/socket";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    if (token) {
      dispatch(getMe()).then(() => {
        navigator(PATH.HOME);
      });
    } else {
      navigator(PATH.SIGN_IN);
    }
  }, [token]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
