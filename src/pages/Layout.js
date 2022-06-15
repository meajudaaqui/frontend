import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/create-user">Create User</Link>
          </li>
        </ul>
      </nav>
      <br></br>
      <br></br>
      

      
      <Outlet />
      
    </>
  )
};

export default Layout;