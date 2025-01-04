import Navbar from "./_components/Navbar";
import { MenuType } from "./types";

const Header = () => {
  const navMenu: MenuType = [
    { title: "Home", href: "/" },
    { title: "Link1", href: "/sample" },
    { title: "Lnik2", href: "#" },
    { title: "Link3", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-30 drop-shadow-sm mb-16">
      <div className="container flex justify-center items-center h-12 pl-3 mx-auto md:h-14 md:pl-0">
        <Navbar menuList={navMenu} />
      </div>
    </header>
  );
};

export default Header;
