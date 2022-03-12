import { Post } from "./Post";

import { posts } from "../../data";

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.user.username}
          avatar={post.user.avatar}
          content={post.content}
          avatarLastUserLike={post.lastUserLike.avatar}
          nameOfLastUserLike={post.lastUserLike.username}
          numberOfLikes={post.numberOfLikes}
        />
      ))}
    </div>
  );
};

export { Posts };
