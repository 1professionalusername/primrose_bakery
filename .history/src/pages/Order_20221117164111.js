import Nav from "../components/Nav";
import SlimFooter from "../components/SlimFooter";
import { Link } from "react-router-dom"



export default function Order(){
    return(
        <div className="body">
      <Nav />
      <div className="primrose_icon_container_top">
          <Link to='/'><div className="primrose_icon" /></Link>
          </div>
          <div className="order_body_wrapper"
      <SlimFooter />
    </div>
  );
}
   