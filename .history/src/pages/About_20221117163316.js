import React from 'react';
import Nav from "../components/Nav";
import Icon from '../components/Icon'
import SlimFooter from '../components/SlimFooter';


export default function About() {
  return (
    <div className="body">
      <Nav />
      <Icon />
      <div class="about_page_wrapper">
      
      <div className="about_image"><span className="hey">Hey!</span><span className="damali">I'm Damali</span></div>
      <div className="about_text"><p>Damali is originally from New Jersey but grew up in Florida with her 4 siblings, parents and mulitude of pets. She's 
      been passionate about baking since she was 12 and continued pursuing that passion throughout high school and after.</p><br/> <p>She's worked in different bakeries
      across New York and uses her knowledge of different cultures and experiences to add unique flavors to her treats. Damali has lived in Austin
      for the past 5 years with her fiance and son.</p></div>
      </div>
      <SlimFooter />
    </div>
  );
}