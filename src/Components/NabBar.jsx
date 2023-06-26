import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify, FaRegTimesCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NabBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch(console.error(error.message));
  };

  return (
    <div className="bg-black text-white ">
      <div className=" px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="">
            <span className="mb-3 text-xl sm:text-2xl  font-bold tracking-wide uppercase">
              <span className=" text-purple-500">Dremer</span>
            </span>
          </Link>

          {/* NavBar Items Section */}
          <ul className="items-center hidden space-x-4 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Top Engineer
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div>
            <ul className="hidden space-x-4 lg:flex items-center">
              <li>
                {user ? (
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.photoURL}
                      alt="photo"
                    />
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    login
                  </NavLink>
                )}
              </li>
              <li>
                {user ? (
                  <button className="btn2" onClick={handelLogOut}>
                    log out
                  </button>
                ) : (
                  <Link to="/signup">
                    <button className="btn2">Sign Up</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {/* here is Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown  Button Open*/}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsOpen(true)}
            >
              <FaAlignJustify className="h-7 w-7"></FaAlignJustify>
            </button>
            {isOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-black border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/">
                        <span className="mb-6 text-2xl font-bold tracking-wide text-white uppercase">
                          <span className=" text-purple-500">Dremer</span>
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu  button close */}
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaRegTimesCircle className="h-7 w-7" />
                    </button>
                  </div>
                  {/* Mobile NavBar Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/alltoys"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          All Toys
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>

                      <li>
                        {user ? (
                          <div
                            className="tooltip tooltip-bottom"
                            data-tip={user.displayName}
                          >
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.photoURL}
                              alt="photo"
                            />
                          </div>
                        ) : (
                          <NavLink
                            to="/login"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            login
                          </NavLink>
                        )}
                      </li>
                      <li>
                        {user ? (
                          <button className="btn2" onClick={handelLogOut}>
                            log out
                          </button>
                        ) : (
                          <Link to="/signup">
                            <button className="btn2">Sign Up</button>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NabBar;
