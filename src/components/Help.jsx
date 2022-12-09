import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "brown" }}>Help</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
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
      <img src="https://uploads-ssl.webflow.com/5e3de80322b300854230f11f/5f0e1ff75c232dc7f7486be5_contact-us-thumb.jpg" alt="image"/>
    </>
  );
};
export default Help;
