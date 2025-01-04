import Navbar from "./_components/Navbar";
import { MenuType } from "./types";

const Header = () => {
  const navMenu: MenuType = [
    { title: "Home", href: "/" },
    { title: "Week01", href: "/week01" },
    { title: "Week02", href: "#" },
    { title: "Week03", href: "#" },
    { title: "Week04", href: "#" },
    { title: "Week05", href: "#" },
    { title: "Week06", href: "#" },
    { title: "Week07", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-30 bg-white drop-shadow-sm mb-16">
      <div className="container flex justify-center items-center h-12 pl-3 mx-auto md:h-14 md:pl-0">
        <Navbar menuList={navMenu} />
      </div>
    </header>
  );
};

export default Header;
