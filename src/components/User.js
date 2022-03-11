function User(props) {
  return (
    <div className="usuario">
      <img src={props.image} alt="" />
      <div className="texto">
        <strong>{props.username}</strong>
        {props.name}
      </div>
    </div>
  );
}

export default User;
