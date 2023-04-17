import {RiLayoutGridFill} from 'react-icons/ri';
import {HiUsers,HiShoppingBag} from 'react-icons/hi';
import CustomLink from "../../hooks/CustomLink";

const SideBar =({handleCloseSidebar}) => {

    return (
        <div className="fixed w-64 h-full bg-white">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
                        alt="company logo"/>
                </picture>
            </div>

            <div className="flex flex-col">
                <CustomLink onClick={handleCloseSidebar} to='/'> <button className="flex items-center gap-2"><RiLayoutGridFill className="text-xl"/> <span>Dashboard</span></button></CustomLink>
                <CustomLink onClick={handleCloseSidebar} to='/products'><button className="flex items-center gap-2"><HiShoppingBag className="text-xl"/> <span>Products</span></button></CustomLink>
                <CustomLink onClick={handleCloseSidebar} to='/customers'><button className="flex items-center gap-2"><HiUsers/> <span>Customers</span></button></CustomLink>
                <CustomLink onClick={handleCloseSidebar} to='/table'><button className="flex items-center gap-2"><HiUsers/> <span>Table</span></button></CustomLink>
            </div>
        </div>
    );
};


export default SideBar;
