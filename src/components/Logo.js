import React from "react";

function Logo() {
  return (
    <React.Fragment>
      <div className="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="separador"></div>
        <img src="assets/img/logo.png" alt="" />
      </div>

      <div className="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>

      <div class="instagram-mobile">
        <img src="assets/img/logo.png" alt="" />
      </div>
    </React.Fragment>
  );
}

export default Logo;
