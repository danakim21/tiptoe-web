import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import tiptoe from './image/tiptoe.png';
import MainImage from './image/MainImage.jpeg';
import Timeline from './image/Timeline.png';
import threeimages from './image/threeimages.png';
import threesteps from './image/threesteps.png';
import gray from './image/gray.png';
import Footer from '../footer/footer';
import Typing from 'react-typing-animation';
import { Slide } from 'react-slideshow-image';
import Slider from './slideshow/parentslider.jsx';
import slideshow1 from './image/slideshow1.jpg'
import slideshow2 from './image/slideshow2.jpg'
import slideshow3 from './image/slideshow3.jpeg'

//import ReactDOM from 'react-dom';
//import { Carousel } from 'react-responsive-carousel';


import './Home.css';

const slideImages = [
  'image/slideshow1.jpg',
  'image/slideshow2.jpg',
  'image/slideshow3.jpeg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  state = {
    name: 'HOME',
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <div class="dropdown">
          <button class="dropdown_b" onClick={this.showAbout}>ABOUT</button>
        </div>

        <div class="nav">
          <div class="navbutton">
            <a href="" class="navProjects">PROJECTS</a>
            <a href="" class="navKor">한국어</a>
            <a href="" class="navShop">SHOP</a>
            <img src={tiptoe} class="mainlogo" alt="logo" />
          </div>
        </div>

        {
          this.state.showAbout
            ? (
              <div className="dropdown" ref={(element) => {
                this.dropdownAbout = element;
              }}
              >
                <div class="container">
                  <div class="buttonbox">
                    <button class="button"> OUR STORY </button>
                    <button class="button"> OUR TEAM </button>
                    <button class="button"> PARTNERS/PRESS </button>
                    <button class="button"> JOIN US </button>
                  </div>
                  <div class="imagebox1">
                    <img src={gray} class="navbarimage1" />
                    <div class="imageboxtext">OUR STORY</div>
                  </div>
                  <div class="imagebox2">
                    <img src={gray} class="navbarimage2" />
                    <div class="imageboxtext">OUR STORY</div>
                  </div>
                </div>
              </div>
            )
            : (null)
        }

        <div class="imageText">
          <img src={MainImage} class="mainImage" alt="" />
          <h1 class="mainImageText2">spring ‘19 new release</h1>
          <h1 class="mainImageText1">spring ‘19 new release</h1>
        </div>

        <div class="tiptoeName">
          <img src={tiptoe} class="nameLogo" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName">your name</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line"></hr>
        </div>

        <p class="p3launch">P_3 LAUNCH</p>

        <img src={Timeline} class="timelineImg" alt="" />
        <img src={threeimages} class="image3" alt="" />
        <img src={threesteps} class="stepsImg" alt="" />

        <div class="join">
          <div class="joinEmail">
            <p class="joinEmailText">Join the TIPTOE&</p>
            <div class="emailRect"></div>
            <button class="joinButton">JOIN</button>
          </div>
          <p class="joinEmailText2">Get updates on our current projects.</p>
          <p class="joinEmailText3">By clicking join, I accept the Privacy Policy and Terms of Use. You may unsubscribe at any time.</p>
        </div>


        <Footer />


      </div>



    );
  }
}

export default Home;