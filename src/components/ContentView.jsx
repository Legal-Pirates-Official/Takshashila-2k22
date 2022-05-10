import React, { useState } from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";

export default function ContentView({ rules, registration, type, gallery }) {
  const [activeTab, setActiveTab] = useState(rules ? "rules" : "registration");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimatting] = useState(false);
  const slides = () =>
    gallery.map((image) => {
      const url = require(`../assets/eventLogos/${image}.png`);
      return (
        <CarouselItem key={url} >
          <img className="img-fluid h-100 mx-auto" alt="gallery-img" src={url}></img>
        </CarouselItem>
      );
    });

  const handleNext = () => !isAnimating&&
    activeIndex === gallery.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  const handlePrevious = () =>!isAnimating&&
    activeIndex === 0
      ? setActiveIndex(gallery.length - 1)
      : setActiveIndex(activeIndex - 1);

  
  return (
    <div
      className="h-100"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 20
      }}
    >
      <div
        className="pannel"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 25,
          flexWrap: "wrap"
        }}
      >
        {rules && (
          <h3
            className={
              type === "cultural"
                ? "cultural-tab-selector fw-light"
                : "technical-tab-selector fw-light"
            }
            style={{
              textDecoration: activeTab === "rules" ? "underline" : "none"
            }}
            onClick={() => setActiveTab("rules")}
          >
            Rules
          </h3>
        )}
        {registration && (
          <h3
            className={
              type === "cultural"
                ? "cultural-tab-selector fw-light"
                : "technical-tab-selector fw-light"
            }
            style={{
              textDecoration:
                activeTab === "registration" ? "underline" : "none"
            }}
            onClick={() => setActiveTab("registration")}
          >
            Registration
          </h3>
        )}
        {gallery && (
          <h3
            className={
              type === "cultural"
                ? "cultural-tab-selector fw-light"
                : "technical-tab-selector fw-light"
            }
            style={{
              textDecoration: activeTab === "gallery" ? "underline" : "none"
            }}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </h3>
        )}
      </div>
      <div className="content py-0 h-100">
        {activeTab === "rules" ? (
          <div style={{ height: "400px", overflowY: "scroll" }}>
            <ul>
              {rules?.map((rule) => (
                <>
                  <h4 className="my-2">{Object?.keys(rule)[0]}</h4>
                  {rule[Object?.keys(rule)[0]]?.map((rules) => (
                    <li style={{ listStyle: "inside", whiteSpace: "pre-line" }}>
                      {rules}
                    </li>
                  ))}
                </>
              ))}
            </ul>
          </div>
        ) : activeTab === "registration" ? (
          <div style={{ height: "400px", overflowY: "scroll" }}>
            <ul>
              {registration &&
                registration?.map((rule) => (
                  <li style={{ listStyle: "inside", whiteSpace: "pre-line" }}>
                    {rule}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <div style={{ height: "400px" }}>
            <Carousel
              activeIndex={activeIndex}
              next={handleNext}
              previous={handlePrevious}
              onExiting={()=>setIsAnimatting(true)}
          onExited={()=>setIsAnimatting(false)}
            >
              {slides()}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={handlePrevious}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={handleNext}
              />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
