import { Suggestions } from "./Suggestions";
import { User } from "./User";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <User
        avatar="assets/img/catanacomics.svg"
        username="catanacomics"
        name="Catana"
      />

      <Suggestions />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
};

export { Sidebar };
