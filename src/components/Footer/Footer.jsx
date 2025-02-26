import logo from '../../assets/logo.png'; // Importing logo image
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Importing demo social icons

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 border-b dark:border-gray-700">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              {/* Demo icons */}
              <img className='w-10 h-10 object-cover' src={logo} alt="" />
              {/* <div className="w-10 h-10 bg-red-600 rounded-full"></div>
              <div className="w-10 h-10 bg-orange-500 rounded-full -ml-5"></div> */}
            </div>
            <h3 className="text-lg font-semibold mt-4">
              Need help? We{"'"}re always here when you need us
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>💬</span> <span>Get Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>💳</span> <span>Report a lost or stolen card</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span> <span>Find ATM</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>❓</span> <span>FAQs</span>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Who we are</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Investor Relations</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-span-1 flex flex-col justify-end">
            <h3 className="text-lg font-semibold">SUPPORT</h3>
            <h3 className="text-lg font-semibold">PAYNOVA SITES</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Paynova Data & Services</li>
              <li>Paynova Brand Center</li>
              <li>Paynova Marketing Center</li>
              <li>Paynova Developers</li>
              <li>Paynova Blog</li>
              <li>Support Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" border-gray-700 mt-8 pt-4 text-center text-sm text-gray-600">
        <p className="text-sm">
            &copy; {new Date().getFullYear()} EduProSphere. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Site map</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-700"><FaLinkedinIn /></a>
            <a href="#" className="text-blue-500 hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="text-red-600 hover:text-red-700"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
