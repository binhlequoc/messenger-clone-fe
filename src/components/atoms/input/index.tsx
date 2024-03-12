import "./styles.scss";

interface IInput {
  name: string;
  type?: string;
  value?: string | number | readonly string[];
  icon?: string | React.ReactNode;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
}

export default function Input({ icon, ...props }: IInput) {
  return (
    <div className="atoms-input-wrapper">
      <input className="atoms-input" {...props} />
      {typeof icon === "string" ? <img src={icon} /> : icon}
    </div>
  );
}
