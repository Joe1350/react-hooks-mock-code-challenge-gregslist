import React from "react";
import Search from "./Search";

function Header({ onSearchSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
