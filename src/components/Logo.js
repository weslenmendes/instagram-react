import React from "react";
import Icon from "./Icon";

function Logo() {
  return (
    <React.Fragment>
      <div className="logo">
        <Icon name="logo-instagram" />
        <div className="separador"></div>
        <img src="assets/img/logo.png" alt="" />
      </div>

      <div className="logo-mobile">
        <Icon name="logo-instagram" />
      </div>

      <div className="instagram-mobile">
        <img src="assets/img/logo.png" alt="" />
      </div>
    </React.Fragment>
  );
}

export default Logo;
