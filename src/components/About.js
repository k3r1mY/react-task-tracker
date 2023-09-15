import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="https://www.youtube.com/channel/UC3QQUUun8tsdLJBVxdtqFLw">
        Youtube
      </Link>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
