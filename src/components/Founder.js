import React, { useRef } from 'react';

export const Founder = () => {
    const dataCard = [
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643d785ce4b16a9a9979095a_Blog%20Build%20VS%20Buy%20-p-2000.png",
            text:"To Build or Buy: The Endless Inventory Planning Dilemma",
            date:"Apr 17, 2023"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/642688163009ef784ee99686_blog%20image%20-p-2000.png",
            text:"Why your ERP is not your Inventory Planning Tool",
            date:"Mar 31, 2023"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326deb27ea3f8f_468b6a_96c90640016f4d5c9ecf316a4e009a26_mv2-p-2000.webp",
            text:"Do you frequently run out of stock? Here's everything about inventory replenishment",
            date:"Jan 10, 2022"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d0611ea3f8e_073684_64a111d0b38344cda00cba7b5de621f7_mv2-p-2000.jpeg",
            text:"Inside India's Burgeoning D2C Market",
            date:"Nov 24, 2022"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1bfdea3f8c_468b6a_694f8d95a6a14671ad1759b3dbdbb4d2_mv2-p-2000.jpeg",
            text:"Losing money due to excess inventory? Here are 5 tips to eliminate and avoid wastage.",
            date:"Feb 8, 2022"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1c21ea3f89_073684_6103c3f6e9d84d07807f541215057ae3_mv2.webp",
            text:"Interview: What Makes Mayura Rao Ausum!",
            date:"Jan 20, 2022"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d8f7fea3f84_073684_046aa855f2a04c338e08cbe0d0c0480b_mv2-p-500.webp",
            text:"Interview: Life Outside the Fast Fashion Lane with The Khandwala Brothers",
            date:"Feb 10, 2022"
        },
        {
            imgSrc:"https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d885eea3f77_468b6a_effce4cf347b42ea81c6fb5f04d828f4_mv2-p-500.webp",
            text:"How to grow your D2C business with better planning?",
            date:"Feb 15, 2022"
        },
    ];

    const containerRef = useRef(null);

    const slideLeft = () => {
        containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const slideRight = () => {
        containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <section className="founder-section" id="founder-section">
            <div className="founder-name-card">
                <p>Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti - Founders</p>
            </div>
            <div className="founder-txtbx">
                <h1>From the Founders</h1>
                <p>We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that</p>
                <p style={{ marginTop: "5%" }}>Thank you for checking out Crest, and we hope to help you always be in stock!</p>
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                </button>
            </div>
            <div className="img-bx">
                <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo-p-800.webp" alt="founder" />
            </div>

            <div className="blog-section">
                <div className="txt-section-blog">
                    <h1 style={{ fontSize: "44px", fontWeight: "bold", marginBottom: "8%" }}>Delivered:<br />The CleverBook blog</h1>
                    <p style={{ lineHeight: "28px",fontSize:"18px" }}>Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!</p>
                    <div className='navigation-tab' style={{ display: "flex", marginTop: "40px" }}>
                        <img onClick={slideLeft} style={{ transform: "rotate(180deg)", cursor: "pointer" }} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="arrow-tab" />
                        <img onClick={slideRight} style={{ marginLeft: "20px", cursor: "pointer" }} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="arrow-tab" />
                    </div>
                    <div className="button-wrapper pos-rel">
                        <button style={{ padding: "15px 30px", fontSize: "18px", marginTop: "20%" }} className="custom-btn"><span className="text-gradient">View All Blogs</span></button>
                    </div>
                </div>
                <div className="blog-cards-container" ref={containerRef}>
                    {
                        dataCard.map((card, index) => (
                            <div className="blog-cards" key={index}>
                                <div className="blog-section-card">
                                    <div className="card-image">
                                        <img style={{ width: "400px", height: "230px" }} src={card.imgSrc} alt="" />
                                    </div>
                                    <div>
                                        <h4 className="card-body" style={{ width: "100%", marginLeft: "0px", marginRight: "0px", padding: "0px", marginTop: "40px" }}>
                                            {card.text}
                                        </h4>
                                    </div>
                                    <p className="footer">{card.date} <span className="icon"><img style={{ width: "24px" }} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d07edea3eca_Vector.svg" alt="" /></span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

