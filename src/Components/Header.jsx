import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 rounded py-10">
      <div className="container flex flex-wrap items-center justify-center mx-auto ">
        <Link to="/">
          {" "}
          <a className="flex items-center">
            <span className="self-center text-xl font-light whitespace-nowrap text-yellow-900 ">
              github<span className="font-bold text-yellow-900">finder</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
