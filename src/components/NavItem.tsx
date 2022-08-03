import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import NavItemType from "../types/NavItemType";
const NavItem = ({ item }: NavItemType) => {
  let match = useRouteMatch({
    path: item.path,
    exact: item.activeOnlyWhenExact,
  });
  return (
    <li>
      <NavLink
        to={item.path}
        className={`${match ? "border-teal-500 border-b-2" : ""}   py-2`}>
        <span>
          {item.title}
        </span>
      </NavLink>
    </li>
  );
};

export default NavItem;
