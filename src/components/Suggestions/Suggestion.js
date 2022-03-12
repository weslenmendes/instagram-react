const Suggestion = ({ avatar, username, followYou }) => {
  const showReason = (value) => {
    if (value) {
      return <div className="razao">Segue você</div>;
    } else {
      return <div className="razao">Novo no Instagram</div>;
    }
  };

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={avatar} alt="" />
        <div className="texto">
          <div className="nome">{username}</div>
          {showReason(followYou)}
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
};

export { Suggestion };
