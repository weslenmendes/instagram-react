const Story = ({ urlAvatar, username }) => {
  return (
    <div className="story">
      <div className="imagem">
        <img src={urlAvatar} alt={username} />
      </div>
      <div className="usuario">{username}</div>
    </div>
  );
};

export { Story };
