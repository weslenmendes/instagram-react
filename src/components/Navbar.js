import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { NavMenu } from "./NavMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <SearchBar />
        <NavMenu />
      </div>
    </div>
  );
};

export { Navbar };
