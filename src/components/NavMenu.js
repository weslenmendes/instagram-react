import React from "react";
import Icon from "./Icon";

const iconsName = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];

function NavMenu() {
  return (
    <React.Fragment>
      <div className="icones">
        {iconsName.map((name, index) => (
          <Icon key={index} name={name} />
        ))}
      </div>

      <div className="icones-mobile">
        <Icon name="paper-plane-outline" />
      </div>
    </React.Fragment>
  );
}

export default NavMenu;
