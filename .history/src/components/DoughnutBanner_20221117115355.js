import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"



export default function Order(){
    return(
        <div className="body">
      <Nav />
      <div className="primrose_icon_container_top">
          <Link to='/'><div className="primrose_icon" /></Link>
          </div>
      <Footer />
    </div>
  );
}
   