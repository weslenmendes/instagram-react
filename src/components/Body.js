import Story from "./Story";
import Post from "./Post";
import Sidebar from "./Sidebar";
import FooterMenu from "./FooterMenu";
import Icon from "./Icon";

const stories = [
  { id: 1, urlImage: "assets/img/9gag.svg", username: "9gag" },
  { id: 2, urlImage: "assets/img/meowed.svg", username: "meowed" },
  { id: 3, urlImage: "assets/img/barked.svg", username: "9gag" },
  {
    id: 4,
    urlImage: "assets/img/nathanwpylestrangeplanet.svg",
    username: "nathanwpylestrangeplanet",
  },
  { id: 5, urlImage: "assets/img/wawawicomics.svg", username: "wawawicomics" },
  { id: 6, urlImage: "assets/img/respondeai.svg", username: "respondeai" },
  { id: 7, urlImage: "assets/img/filomoderna.svg", username: "filomoderna" },
  {
    id: 8,
    urlImage: "assets/img/memeriagourmet.svg",
    username: "memeriagourmet",
  },
];

const posts = [
  {
    id: 1,
    username: "meowed",
    avatar: "assets/img/meowed.svg",
    type: "image",
    content: "assets/img/gato-telefone.svg",
    avatarLastUserLike: "assets/img/respondeai.svg",
    nameOfLastUserLike: "respondeai",
    numberOfLikes: "101.523",
  },
  {
    id: 2,
    username: "barked",
    avatar: "assets/img/barked.svg",
    type: "image",
    content: "assets/img/dog.svg",
    avatarLastUserLike: "assets/img/adorable_animals.svg",
    nameOfLastUserLike: "adorable_animals",
    numberOfLikes: "99.159",
  },
  {
    id: 3,
    username: "barked",
    avatar: "assets/img/barked.svg",
    type: "video",
    content: ["assets/video/video.mp4", "assets/video/video.ogv"],
    avatarLastUserLike: "assets/img/adorable_animals.svg",
    nameOfLastUserLike: "adorable_animals",
    numberOfLikes: "99.159",
  },
];

function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          {stories.map((story) => (
            <Story
              key={story.id}
              urlAvatar={story.urlImage}
              username={story.username}
            />
          ))}
          <div className="setinha">
            <Icon name="chevron-forward-circle" />
          </div>
        </div>

        <div className="posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              avatar={post.avatar}
              type={post.type}
              content={post.content}
              avatarLastUserLike={post.avatarLastUserLike}
              nameOfLastUserLike={post.nameOfLastUserLike}
              numberOfLikes={post.numberOfLikes}
            />
          ))}
        </div>
      </div>

      <Sidebar />

      <FooterMenu />
    </div>
  );
}

export default Body;
