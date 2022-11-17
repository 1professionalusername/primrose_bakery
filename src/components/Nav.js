import { Outlet, Link } from "react-router-dom";

//Renders Navigation links
export default function Nav() {
  return (
    <nav>
        <Link to="/" className="home">HOME</Link>
          <Link to="/gallery" className="gallery">GALLERY</Link>
            
          <Link to="/about" className="about">ABOUT</Link>
        <Link to="/order" className="order">ORDER</Link>
      <Outlet />
    </nav>
    
  );
}
