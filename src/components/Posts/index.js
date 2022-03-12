import { Post } from "./Post";

import { posts } from "../../data";

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          typeOfContent={post.type}
          content={post.content}
          avatarLastUserLike={post.avatarLastUserLike}
          nameOfLastUserLike={post.nameOfLastUserLike}
          numberOfLikes={post.numberOfLikes}
        />
      ))}
    </div>
  );
};

export { Posts };
