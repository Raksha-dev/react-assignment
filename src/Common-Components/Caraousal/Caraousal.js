import React, { Component } from "react";
import Mainbanner from "./Style";
import * as classes from "./header.css";
import Carousel from "react-elastic-carousel";
import SlideIamgeone from "../../Assets/Images/slide-01.jpg";
import SlideIamgetwo from "../../Assets/Images/slide-03.jpg";
import {
  StyledDiv,
  Buttonleft,
  ButtonRight,
  CarouselContainer,
  Carouselcontent,
} from "./Style";

class banner extends Component {
  state = {
    items: [
      { id: 1, title: "Creative Essence", url: SlideIamgeone },
      { id: 2, title: "Web Design Toolkit", url: SlideIamgetwo },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <CarouselContainer>
        <Buttonleft
          onClick={() => this.carousel.slidePrev()}
          style={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translate(-50%,-50%)",
          }}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Buttonleft>
        <Carousel
          autoPlay
          autoPlayInterval="3000"
          style={{ width: "100%", height: "100%" }}
          ref={(ref) => (this.carousel = ref)}
          className="topCarousel"
          showArrows={false}
        >
          {items.map((item) => (
            <StyledDiv key={item.id}>
              <img src={item.url}></img>
              <Carouselcontent>
                <h2>Creative Essence</h2>
                <p>
                  Dynamically reinvent market-driven opportunities and
                  ubiquitous interfaces. Energistically fabricate an expanded
                  array of niche markets through robust products.
                </p>
                <button>Purchase Now</button>
              </Carouselcontent>
            </StyledDiv>
          ))}
        </Carousel>
        <ButtonRight
          onClick={() => this.carousel.slideNext()}
          style={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translate(22%,-50%)",
          }}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </ButtonRight>
      </CarouselContainer>
    );
  }
}

export default banner;
