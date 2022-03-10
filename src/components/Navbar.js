import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Icons from "./Icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <SearchBar />
        <Icons />
      </div>
    </div>
  );
}

export default Navbar;
