import Tools from "@/components/molecules/LeftPanel/Tools";
import "./styles.scss";
import Input from "@/components/atoms/input";
import ListFriend from "@/components/molecules/LeftPanel/ListFriend";

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <Input name="search" />
      <Tools />
      <ListFriend />
    </div>
  );
}
