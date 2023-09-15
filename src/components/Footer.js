import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p> React Task Tracker &copy; </p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
