import { Icon } from "./Icon";

const Logo = () => {
  return (
    <>
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
    </>
  );
};

export { Logo };
