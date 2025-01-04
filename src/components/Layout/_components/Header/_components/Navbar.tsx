import { Link } from "react-router";
import { MenuProps } from "../types";

const Navbar = ({ menuList }: MenuProps) => {
  return (
    <nav>
      <ul className="z-10 flex h-full gap-8 space-x-5">
        {menuList.map((item) => (
          <li key={item.title}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
