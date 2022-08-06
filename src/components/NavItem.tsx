import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
const NavItem = ({ item }) => {
  let match = useRouteMatch({
    path: item.path,
    exact: item.activeOnlyWhenExact,
  });
  return (
    <NavLink
      key={item.key}
      to={item.path}
      className={`${match ? "border-teal-500 border-b-2" : ""} dark:text-white  py-2`}
      aria-current={match ? 'page' : undefined}
    >
      {item.title}
    </NavLink>

  );
};

export default NavItem;
