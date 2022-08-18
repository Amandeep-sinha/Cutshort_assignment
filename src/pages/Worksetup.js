import "../styles.css";
import { Header, Content, Form } from "../components";

export default function Worksetup() {
  return (
    <div>
      <Header step={2} />
      <Content
        head="Let's set up a home for all your work"
        text="You can always create another workspace later ."
      />
      <Form
        label1="Workspace Name"
        label2="Workspace URL (optional)"
        placeholder1="Eden"
        placeholder2="Example"
        btntext="Create Workspace"
        url="www.eden.com/"
        path="/scheme"
      />
    </div>
  );
}
