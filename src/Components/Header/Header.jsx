import React from 'react';
import { Link,NavLink} from 'react-router-dom';
import Layout from '../../Layout';

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" className="h-14 invert w-32" alt="Flowbite Logo" />
            
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            
          <Link  class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Login</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink to="/" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-semibold" exact aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/company" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-semibold">Company</NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-semibold">Team</NavLink>
              </li>
              <li>
                <NavLink to="/features" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-semibold">Features</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
