import { Story } from "./Story";
import { Icon } from "../Icon";

import { stories } from "../../data";

const Stories = () => {
  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          key={story.id}
          urlAvatar={story.avatar}
          username={story.username}
        />
      ))}
      <div className="setinha">
        <Icon name="chevron-forward-circle" />
      </div>
    </div>
  );
};

export { Stories };
