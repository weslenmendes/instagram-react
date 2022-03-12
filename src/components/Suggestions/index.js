import { Suggestion } from "./Suggestion";

import { suggestions } from "../../data";

const Suggestions = () => {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map(({ id, avatar, username, followYou }) => (
        <Suggestion
          key={id}
          avatar={avatar}
          username={username}
          followYou={followYou}
        />
      ))}
    </div>
  );
};

export { Suggestions };
