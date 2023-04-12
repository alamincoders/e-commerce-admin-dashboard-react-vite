import { forwardRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { BiBorderAll } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useLocation();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link to="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-primary-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-primary-500"
            }`}
          >
            <div className="mr-2">
              <BiBorderAll className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link to='/products' >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/products"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <FiShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </Link>
        <Link to='/customers' >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/customers"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Customers</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
