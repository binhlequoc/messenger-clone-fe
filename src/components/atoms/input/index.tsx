import "./styles.scss";

interface IInput {
  name: string;
  type?: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
}

export default function Input(props: IInput) {
  return <input className="atoms-input" {...props} />;
}
