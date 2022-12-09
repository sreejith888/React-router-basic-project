import {Link } from "react-router-dom";

const Features =()=>{
  return(
    <>
    <h1 style={{backgroundColor:"green"}}>Features</h1>
    <ul>
    <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/home">Features</Link>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        </ul>
        <img src="https://wallpaper.dog/large/10734694.jpg" alt="image"/>
        </>
  
  );
}
export default Features;