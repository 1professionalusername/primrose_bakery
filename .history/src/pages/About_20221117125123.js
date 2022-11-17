
// import Gnav from "../components/Gnav";
// import Gicon from '../components/Gicon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function About() {
  return (
    <div className="body">
      {/* <Gnav />
      <Gicon /> */}
      <div class="about_page_wrapper">
      
      <div className="about_image"><span className="hey">Hey!</span><span className="damali">I'm Damali</span></div>
      <div className="about_text"><p>Damali is originally from New Jersey but grew up in Florida with her 4 siblings, parents and mulitude of pets. She's 
      been passionate about baking since she was 12 and continued pursuing that passion throughout high school and after.</p><br/> <p>She's worked in different bakeries
      across New York and uses her knowledge of different cultures and experiences to add unique flavors to her treats. Damali has lived in Austin
      for the past 5 years with her fiance and son.</p></div>
      </div>
      <div className="aboutfooter">
        <a href="https://instagram.com/gleauxsweetshop?igshid=YmMyMTA2M2Y=">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
     
    </div>
  );
}