import React, { Fragment} from 'react';
import AboutImage from '../images/philip.jpg';
function About() {
  return (
    <Fragment>
      <div className="container"> 
        <div className="row">
          <div className="about">
            <div className="d-flex">
              <img src={AboutImage} alt="" width="350px" height="300px" className="img-thumbnail"/>
              <p className="p-3 text-black">
              A lifelong train enthusiast, as a child Philip limited himself mainly to his model layout in his boyhood on Auckland’s train less North Shore. Following his retirement from running his manufacturing business, Philip was able to pursue a much more active interest in rail topics. Philip tragically passed away from cancer in 2019. An excellent photographer, Philip’s collection of railway photos is displayed on this website for all to enjoy.
              <br></br>
              <br></br>
              Philip was an active member and contributor to the New Zealand Railway and Locomotive society and author of the books  <i> <b> Non-Steam Locomotives of New Zealand, Petrol, Diesel and Electric Power on the Rail Network 1923-2014 (2015) </b> </i> and  <i> <b> An Identification Key to NZR Steam Locomotives Classes (2013), </b> </i> and co-author of <i> <b> MOTAT locomotives : the locomotive collection of Auckland's Museum of Transport & Technology (2014). </b></i>

              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
