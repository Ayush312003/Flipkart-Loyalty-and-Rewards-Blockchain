import { useRouter } from "next/router";
import Link from "next/link";
import { FiHome, FiShoppingBag, FiGift, FiUsers, FiMoon, FiSun } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { MetaMask } from "./MetaMask";
import { DarkModeToggle } from "src/helpers/DarkModeToggle";

export const NavBar = () => {
	const { asPath: path } = useRouter();

	return (
		<>
			{/* <ToastContainer /> */}
			<header className="bg-gradient-to-r from-blue-300 via-pink-500 to-blue-600 shadow-md dark:bg-gray-900">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6 text-lg font-semibold">
              <NavItem path="/" icon={<FiHome />} label="Home" active={path === "/"} />
              <NavItem path="/marketplace" icon={<FiShoppingBag />} label="Marketplace" active={path === "/marketplace"} />
              <NavItem path="/redeem" icon={<FiGift />} label="Redeem" active={path === "/redeem"} />
              <NavItem path="/referral" icon={<FiUsers />} label="Referral" active={path === "/referral"} />
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            {/* <MetaMask /> */}
            {/* <DarkModeToggle /> */}
			<img src="/cryptocurrency.png" className="w-12 h-12" />
          </div>
        </div>
      </header>
		</>
	);
};
const NavItem = ({ path, icon, label, active }) => {
	const activeClassName = active ? "text-gray dark:text-gray" : "text-black dark:text-black";
	
	return (
	  <li className={`nav-item transition-colors duration-300 hover:text-grey:hover:text-white ${activeClassName}`}>
		<Link href={path}>
		  <a className="flex items-center space-x-2">
			{icon}
			<span>{label}</span>
		  </a>
		</Link>
	  </li>
	);
  };