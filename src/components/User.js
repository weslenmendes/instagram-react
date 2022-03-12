const User = ({ avatar, username, name }) => {
  return (
    <div className="usuario">
      <img src={avatar} alt="" />
      <div className="texto">
        <strong>{username}</strong>
        {name}
      </div>
    </div>
  );
};

export { User };
