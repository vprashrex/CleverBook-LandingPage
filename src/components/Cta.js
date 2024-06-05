import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const cards = [
  {
    imgSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",
    title: "Ease of use, for everyone",
    text: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use."
  },
  {
    imgSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",
    title: "Purpose-built & ever-improving tech",
    text: "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving."
  },
  {
    imgSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png",
    title: "Deep domain expertise",
    text: "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B."
  },
  {
    imgSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",
    title: "A focus on KPIs that matter",
    text: "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability."
  }
];


export const Cta = () => {
  

  return (
    <section className="cta-section" id="cta-section">
      <img className='back-img' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d12c8ea3f15_slider-bg.svg" alt="bg"/>

      <div className="header-bx">
        <h1 >Get Clever Book and get..</h1>
      </div>
      <Carousel
        nextIcon={<img  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" className='crausel-cta-arrow right-arrow' alt="Right Arrow" />}
        prevIcon={<img style={{transform:"rotate(180deg)"}} className='crausel-cta-arrow left-arrow' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="Left Arrow" />}
      > {
          cards.map((key,index)=>{
            return(
              <Carousel.Item>
                <div className='card-cta'>
                  <div className='img-bx-cta'>
                    <img src={key.imgSrc} alt="img"/>
                    
                  </div>
                  <div className='right-section-cta-card'>
                    <h1 style={{color:"#121212"}}>{key.title}</h1>
                    <p style={{fontSize:"22px",color:"#121212"}}>{cards[1].text}</p>
                  </div>
                </div>
              </Carousel.Item>
              
            )
          })
        }
          
      </Carousel>
    </section>
  );
};

