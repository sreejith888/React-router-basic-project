import {Link } from "react-router-dom";

const Dashboard =()=>{
  return(
    <>
     <h1 style={{backgroundColor:"red"}}>Dashboard</h1>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
      </ul>
    </nav>
    <img src="https://cdn.dribbble.com/users/364025/screenshots/11287909/dashboard_web_app_for_website_analytics_4x.png" alt="image"/>
  </>
   
  );
}
export default Dashboard ;