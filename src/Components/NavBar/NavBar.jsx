import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#ac8787] py-5 px-14">
      {/* logo & number */}
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-semibold">AutoLux</h1>
        <p>+75 123 456 789</p>
      </div>
      {/* all path */}
      <div className="flex items-center gap-10">
        <NavLink>Home</NavLink>
        <NavLink>Listings</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Pages</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        {/* signIn , signUp*/}
        <div>
            <NavLink>sign</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
