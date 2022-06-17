import React from 'react';
import { Outlet, Link } from "react-router-dom";

const useRefDimensions = (ref) => {
  const [dimension, setDimension] = React.useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimension({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimension
}

const Layout = () => {
  const navRef = React.createRef()
  const dimensions = useRefDimensions(navRef)

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark fixed-top" ref={navRef}>
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
      

      <div style={{paddingTop: dimensions.height}}>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;