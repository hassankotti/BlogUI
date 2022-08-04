import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
const NavItem = ({ item }) => {
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
