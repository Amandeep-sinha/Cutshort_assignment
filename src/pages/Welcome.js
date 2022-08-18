import "../styles.css";
import { Header, Content, Form } from "../components";

export default function Welcome() {
  return (
    <div>
      <Header step={1} />
      <Content
        head="Welcome! First things first..."
        text="You can always change them later"
      />
      <Form
        label1="Full Name"
        label2="Display Name"
        placeholder1="Steve Jobs"
        placeholder2="Steve"
        btntext="Create Workspace"
        url={null}
        path="/setup"
      />
    </div>
  );
}
