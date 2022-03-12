import { Icon } from "../Icon";

const actionIcon = [
  "heart-outline",
  "chatbubble-outline",
  "paper-plane-outline",
];

const Post = (props) => {
  const {
    username,
    avatar,
    content,
    avatarLastUserLike,
    nameOfLastUserLike,
    numberOfLikes,
  } = props;

  const showImageOrVideo = (content) => {
    const { type, url } = content;

    if (type === "video") {
      return (
        <video width="100%" autoPlay muted loop>
          <source src={url[0]} type="video/mp4" />
          <source src={url[1]} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={url} alt="" />;
    }
  };

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={avatar} alt={username} />
          {username}
        </div>
        <div className="acoes">
          <Icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div className="conteudo">{showImageOrVideo(content)}</div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {actionIcon.map((name, index) => (
              <Icon key={index} name={name} />
            ))}
          </div>
          <div>
            <Icon name="bookmark-outline" />
          </div>
        </div>

        <div className="curtidas">
          <img src={avatarLastUserLike} alt={nameOfLastUserLike} />
          <div className="texto">
            Curtido por <strong>{nameOfLastUserLike}</strong> e{" "}
            <strong>outras {numberOfLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Post };
