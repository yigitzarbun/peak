import React from "react";

function Header() {
  return (
    <div className="py-2">
      <header className="flex justify-between w-4/5 mx-auto items-center">
        <h1 className="text-4xl font-bold w-2/5">Peak</h1>
        <p className="font-bold border-2 border-black p-2 hover:bg-black hover:text-white">
          Archived
        </p>
      </header>
    </div>
  );
}

export default Header;
