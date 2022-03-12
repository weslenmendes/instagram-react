import { Posts } from "./Posts";
import { Stories } from "./Stories";
import { Sidebar } from "./Sidebar";
import { FooterMenu } from "./FooterMenu";

const Body = () => {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>

      <Sidebar />

      <FooterMenu />
    </div>
  );
};

export { Body };
