import React, { Component } from 'react';
import Slide from './slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import slideshow1 from '../image/slideshow1.jpg'
import slideshow2 from '../image/slideshow2.jpg'
import slideshow3 from '../image/slideshow3.jpeg'

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        <img src = {slideshow1}/>
      ],

      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style = {{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
