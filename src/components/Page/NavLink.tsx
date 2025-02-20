import React from "react";
import { Link } from "react-router";

const navItems = [
  {
    to: "/",
    text: "How It Works",
  },
  {
    to: "/creators",
    text: "For Creators",
  },
  {
    to: "/publishers",
    text: "For Publishers",
  },
  {
    to: "/brands",
    text: "For Brands",
  },
  {
    to: "/blogs",
    text: "Blogs",
  },
];

export default function NavLink() {
  return navItems.map((item) => (
    <Link
      className="fw-bold text-uppercase text-decoration-none"
      to={`${item.to}`}
    >{`${item.text}`}</Link>
  ));
}
