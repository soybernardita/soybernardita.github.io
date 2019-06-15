import React, { Component } from "react";
import {Carousel} from 'react-responsive-carousel'
// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CV.css';

class CV extends Component {
  render() {
    return (
<div id='canvas'>
  {/*TITLE*/}
  <div className='carousel'>
    <Carousel showStatus={false} showThumbs={false} showArrows={false}  transitionTime={500} >
      <div className='carouselContent' id='myself'>
        <img src={require('../media/mateo.png')} alt="" id="photo"/>
        <div id='title'>
          <p id='name'>Mateo Harfuch</p>
          <p id='job'>Full Stack Developer</p>
        </div>
      </div>
      <div className='carouselContent' id='social' alt="My social Networks">
          <a href='https://ar.linkedin.com/in/mharfuch' target='_blank' rel="noopener noreferrer" ><img src={require('../media/linkedin.png')} alt="LinkedIn" className="hobbieImage"/></a>
          <a href='https://github.com/unmateo' target='_blank' rel="noopener noreferrer"><img src={require('../media/github.png')} alt="GitHub" className="hobbieImage"/></a>
          <a href="mailto:mharfuch@fi.uba.ar?Subject=Hola%20Amigue" target="_top"><img src={require('../media/gmail.png')} alt="Email" className="hobbieImage"/></a>
      </div>
    </Carousel>
  </div>
  {/*END-TITLE*/}
  <hr/>
  {/*PROFESSIONAL*/}
    <div className='carousel'>
      <Carousel showStatus={false} showThumbs={false} showArrows={false} transitionTime={500}>
        <div className='carouselContent'>
            <div className='itemText'>
              <p className='itemTitle'>Leafnoise</p>
              <p className='itemDate'>May 2018 - Present</p>
              <p className='itemDescription'>Python backend developer. Led high impact nation-wide webapp projects on a flask environment.</p>
            </div>
        </div>
        <div className='carouselContent'>
          <div className='itemText'>
            <p className='itemTitle'>Hamburg Sud</p>
            <p className='itemDate'>Jan 2015 - May 2018</p>
            <p className='itemDescription'>IT 2nd level support. Networking, IP telephony system, Inventory and Purchases.</p>
          </div>
        </div>
        <div className='carouselContent'>
          <div className='itemText'>
            <p className='itemTitle'>Ministerio de Agricultura</p>
            <p className='itemDate'>Jan 2014 - Jan 2015</p>
            <p className='itemDescription'>IT 2nd level support. OS migrations from Windows XP to Windows 7.</p>
          </div>
        </div>
      </Carousel>
    </div>
  {/*END-PROFESSIONAL*/}
  <hr/>
  {/*EDUCATION*/}
    <div className='carousel'>
        <Carousel showStatus={false} showThumbs={false} showArrows={false} transitionTime={500}>
          <div className='carouselContent'>
              <div className='itemText'>
                <p className='itemTitle'>Universidad de Buenos Aires</p>
                <p className='itemDescription'>Computer Engineering</p>
              </div>
          </div>
          <div className='carouselContent'>
            <div className='itemText'>
              <p className='itemTitle'>IT College</p>
              <p className='itemDescription'>ICND I & II</p>
              <p className='itemDescription'>MS Advanced Powershell Scripting</p>
            </div>
          </div>
          <div className='carouselContent'>
            <div className='itemText'>
              <p className='itemTitle'>Educación IT</p>
              <p className='itemDescription'>Java, HTML&CSS, UML</p>
            </div>
          </div>
        </Carousel>
    </div>
  {/*END-EDUCATION*/}
  <hr/>
  {/*HOBBIES*/}
    <div className='carousel'>
      <Carousel showStatus={false} showThumbs={false} showArrows={false} transitionTime={500}>

      <div className='carouselContent' alt="What Languages do I know">
        <div id='languages'>
          <div className='languageItem'>
            <img src={require('../media/bar_100.png')} alt="spanish" id='bar'/>
            <p className='languageName'>Spanish</p>
          </div>
          <div className='languageItem'>
            <img src={require('../media/bar_95.png')} alt="english" id='bar'/>
            <p className='languageName'>English</p>
          </div>
          <div className='languageItem'>
            <img src={require('../media/bar_30.png')} alt="german" id='bar'/>
            <p className='languageName'>German</p>
          </div>
        </div>
      </div>
        <div className='carouselContent' id='hobbies' alt="What my hobbies are">
          <img src={require('../media/bike.png')} alt="biking" className="hobbieImage"/>
          <img src={require('../media/music.png')} alt="music" className="hobbieImage"/>
          <img src={require('../media/book.png')} alt="books" className="hobbieImage"/>
          <br/>
          <img src={require('../media/boat.png')} alt="sailing" className="hobbieImage"/>
          <img src={require('../media/travel.png')} alt="travel" className="hobbieImage"/>
          <img src={require('../media/forest.png')} alt="outdoors" className="hobbieImage"/>
        </div>

      </Carousel>
    </div>
  {/*END-HOBBIES*/}
</div>/*END-CANVAS*/
);}}
 export default CV;