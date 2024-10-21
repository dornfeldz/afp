import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#fae5d3] text-center p-4 mt-20">
      <nav className="mb-10">
        <ul className="flex flex-col justify-center space-x-4 md:flex-row">
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/for-customers" className="hover:underline">
              For Customers
            </Link>
          </li>
          <li>
            <Link to="/for-delivery-staff" className="hover:underline">
              For Delivery Staff
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/career" className="hover:underline">
              Career
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} TastyGo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
