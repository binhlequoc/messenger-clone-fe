import Button from "@/components/atoms/button";
import { useCallback } from "react";
import { GrGroup } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { PiChatTeardropTextLight } from "react-icons/pi";
import "./styles.scss";

export default function Tools() {
  const onClick = useCallback(() => () => {}, []);

  return (
    <div className="tools">
      <Button
        text="Chats"
        icon={<PiChatTeardropTextLight size={24} />}
        onClick={onClick()}
      />
      <Button text="Groups" icon={<GrGroup size={24} />} onClick={onClick()} />
      <Button
        text="Calls"
        icon={<IoCallOutline size={24} />}
        onClick={onClick()}
      />
    </div>
  );
}
