import { Icon } from "./Icon";

const iconsName = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline",
];

const FooterMenu = () => {
  return (
    <div className="fundo-mobile">
      {iconsName.map((name, index) => (
        <Icon key={index} name={name} />
      ))}
    </div>
  );
};

export { FooterMenu };
