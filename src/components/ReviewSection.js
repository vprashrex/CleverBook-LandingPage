import React from 'react';
import CustomerPng from "../assets/img/customer.png";
export const ReviewSection = () => {
    const LOGO = [
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c8d12e2df177eeec2_ajanta.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaa30f40ffaa9438ea5_swiss%20beauty%201.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    ];

    return (
        <section className="review-section" id="review-section">
            <div className="carousel">
                <div className="carousel-track">
                    {
                        LOGO.map((logo, index) => (
                            <div key={index} className="logo-flexbox">
                                <img src={logo} alt="logo-img"/>
                            </div>
                        ))
                    }
                    {
                        LOGO.map((logo, index) => (
                            <div key={index + LOGO.length} className="logo-flexbox">
                                <img src={logo} alt="logo-img"/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='right-section-bx'>
                <img style={{borderRadius:"30px"}} src={CustomerPng} alt="img"/>
            </div>
            <div className='customer-review' style={{marginBottom:"5%"}}>
                
                <div className='left-section-txtbx'>
                    <p className='review-txtbx'>
                        D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
                    </p>
                    <div className="founder-bx">
                        <div class="hp-client-wrapper">
                            <img style={{left:"50%",width:"80px"}} alt="" loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"/>
                            <img alt="" loading="lazy" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp" class="client-img"/>
                            <div class="hp-client-info">
                                <div class="h6" style={{fontSize:"23px",fontWeight:"700"}}>Diksha Pande</div>
                                <div class="hp-client-position-wrap">
                                    <span>Co-founder, Samosa Party</span>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='navigation-tab' style={{display:"flex",marginTop:"40px"}}>
                        <img style={{transform:"rotate(180deg)"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="arrow-tab"/>
                        <img style={{marginLeft:"20px"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg" alt="arrow-tab"/>

                    </div>
                </div>
                <div className="button-wrapper pos-rel">
                    <button style={{position:"absolute",marginTop:"4.5%",left:"44%",display:"flex",flexDirection:"column",padding:"33px 80px",}} className="custom-btn"><span className="text-gradient">Read Story</span><span style={{marginTop:"10px"}}><img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg" alt=""/></span></button>

                </div>

                <div className='navigate-btn'>
                    <div className='card1'>
                        <h1>upto 95%</h1>
                        <h5>Demand Fulfilment</h5>
                    </div>
                    <div className='card1'>
                        <h1>upto 95%</h1>
                        <h5>Demand Fulfilment</h5>
                    </div>
                    
                </div>
                
                
            </div>


        </section>
    );
};
