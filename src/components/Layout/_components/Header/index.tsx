import { Link } from "react-router";
import Navbar from "./_components/Navbar";
import { MenuType } from "./types";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { isAuth, logout } = useAuth();
  const navMenu: MenuType = [
    { title: "Home", href: "/" },
    { title: "Week01", href: "/week01" },
    { title: "Week02", href: "/week02" },
    { title: "Week03", href: "/week03" },
    { title: "Week04", href: "/week04" },
    { title: "Week05", href: "/week05" },
    { title: "Week06", href: "#" },
    { title: "Week07", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-30 bg-white drop-shadow-sm mb-16">
      <div className="container flex gap-12 justify-center items-center h-12 pl-3 mx-auto md:h-14 md:pl-0">
        <Navbar menuList={navMenu} />
        {!isAuth ? (
          <Button asChild>
            <Link to="/signIn">登入</Link>
          </Button>
        ) : (
          <Button variant={"outline"} onClick={() => logout()}>
            登出
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
