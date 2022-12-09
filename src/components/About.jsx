import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "blue" }}>About</h1>
      <ul>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
      <img src="https://static.wixstatic.com/media/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c/file.png" alt="image"/>
    </>
  );
};
export default About;
