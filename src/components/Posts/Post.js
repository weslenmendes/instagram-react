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
    typeOfContent,
    content,
    avatarLastUserLike,
    nameOfLastUserLike,
    numberOfLikes,
  } = props;

  const showImageOrVideo = (type, content) => {
    if (type === "video") {
      return (
        <video width="100%" autoPlay muted loop>
          <source src={content[0]} type="video/mp4" />
          <source src={content[1]} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={content} alt="" />;
    }
  };

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={avatar} alt="" />
          {username}
        </div>
        <div className="acoes">
          <Icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div className="conteudo">{showImageOrVideo(typeOfContent, content)}</div>

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
          <img src={avatarLastUserLike} alt="" />
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
