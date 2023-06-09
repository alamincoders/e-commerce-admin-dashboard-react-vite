import {RiLayoutGridFill} from 'react-icons/ri';
import {BsTable,BsCardChecklist} from 'react-icons/bs';
import {HiShoppingBag} from 'react-icons/hi';
import { AiOutlineForm } from "react-icons/ai";

import CustomLink from "../../hooks/CustomLink";

const SideBar = ({ handleCloseSidebar }) => {
  return (
    <div className="fixed w-64 h-full bg-white">
      <div className=" mt-6 mb-14 pl-12">
        <picture>
          <img className="w-32 h-auto" src="https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg" alt="company logo" />
        </picture>
      </div>
      <div className="flex flex-col">
        <CustomLink onClick={handleCloseSidebar} to="/">
          {" "}
          <button className="flex items-center gap-2">
            <RiLayoutGridFill className="text-xl" /> <span>Dashboard</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/products">
          <button className="flex items-center gap-2">
            <HiShoppingBag className="text-xl" /> <span>Products</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/forms">
          <button className="flex items-center gap-2">
            <AiOutlineForm /> <span>Forms</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/table">
          <button className="flex items-center gap-2">
            <BsTable /> <span>Table</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to="/modal">
          <button className="flex items-center gap-2">
            <BsTable /> <span>Modal</span>
          </button>
        </CustomLink>
        <CustomLink onClick={handleCloseSidebar} to='/card'><button className="flex items-center gap-2"><BsCardChecklist/> <span>Card</span></button></CustomLink>
      </div>
    </div>
  );
};

export default SideBar;
