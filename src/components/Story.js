function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.urlAvatar} alt={props.username} />
      </div>
      <div className="usuario">{props.username}</div>
    </div>
  );
}

export default Story;
