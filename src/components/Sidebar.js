import Suggestion from "./Suggestion";
import User from "./User";

const suggestions = [
  {
    id: 1,
    image: "assets/img/bad.vibes.memes.svg",
    username: "bad.vibes.memes",
    followYou: true,
  },
  {
    id: 2,
    image: "assets/img/chibirdart.svg",
    username: "chibirdart",
    followYou: false,
  },
  {
    id: 3,
    image: "assets/img/chibirdart.svg",
    username: "chibirdart",
    followYou: false,
  },
  {
    id: 4,
    image: "assets/img/razoesparaacreditar.svg",
    username: "razoesparaacreditar",
    followYou: false,
  },
  {
    id: 5,
    image: "assets/img/adorable_animals.svg",
    username: "adorable_animals",
    followYou: true,
  },
  {
    id: 6,
    image: "assets/img/smallcutecats.svg",
    username: "smallcutecats",
    followYou: true,
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <User
        image="assets/img/catanacomics.svg"
        username="catanacomics"
        name="Catana"
      />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestions.map(({ id, image, username, followYou }) => (
          <Suggestion
            key={id}
            image={image}
            username={username}
            followYou={followYou}
          />
        ))}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

export default Sidebar;
