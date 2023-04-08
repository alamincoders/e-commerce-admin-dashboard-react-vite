import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import brandImg from "../../../public/img/big_logo.png";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  // const { sidenavColor, sidenavType, openSidenav } = controller;
  const { openSidenav } = controller;
  /* const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  }; */

  return (
    <aside
      className={` bg-white ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50  h-[100vh] w-72 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className={`relative border-b `}>
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src={brandImg} size="sm" className="w-full" />
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={"blue-gray"}
                  className="bg-transparent font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "text" : "text"}
                      className={`flex items-center gap-4 px-4 capitalize ${
                        isActive
                          ? "rounded-none border-l-4 border-primary-600 text-primary-600 transition duration-150 ease-in"
                          : "text-black"
                      } `}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

/* Sidenav.defaultProps = {
  // brandImg: "/img/big_logo.png",
  // brandName: "E-Commerce Admin Dashboard",
}; */

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
