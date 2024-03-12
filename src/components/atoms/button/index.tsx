import clsx from "clsx";
import "./styles.scss";
import React from "react";

interface IButton {
  text: string;
  className?: string;
  icon?: string | React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export default function Button({
  text,
  className = "",
  icon,
  onClick,
}: IButton) {
  return (
    <button className={clsx(className, "app-btn")} onClick={onClick}>
      {text}
      {typeof icon === "string" ? <img src={icon} /> : icon}
    </button>
  );
}
