import { Link } from "react-router-dom";

const Home =()=>{
  return(
    <>
    <h1 style={{backgroundColor:"orange"}}>Home</h1>
    <ul>
    <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        </ul>
        <img src="https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200" alt="image"/>
        </>
  );
}
export default Home ;