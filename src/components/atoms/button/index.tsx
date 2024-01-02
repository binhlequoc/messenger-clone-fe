import clsx from "clsx";
import "./styles.scss";

interface IButton {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default function Button({ text, className = "", onClick }: IButton) {
  return (
    <button className={clsx(className, "app-btn")} onClick={onClick}>
      {text}
    </button>
  );
}
