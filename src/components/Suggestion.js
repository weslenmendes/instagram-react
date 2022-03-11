function isFollowYou(value) {
  if (value) {
    return <div className="razao">Segue você</div>;
  } else {
    return <div className="razao">Novo no Instagram</div>;
  }
}

function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.image} alt="" />
        <div className="texto">
          <div className="nome">{props.username}</div>
          {isFollowYou(props.followYou)}
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;
