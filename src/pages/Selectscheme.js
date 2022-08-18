import "../styles.css";
import { Header, Content, Selectcard } from "../components";

export default function Selectscheme() {
  return (
    <div>
      <Header step={3} />
      <Content
        head="How are you planning to use Eden?"
        text="We'll streamline your setup experience accordingly ."
      />
      <Selectcard />
    </div>
  );
}
