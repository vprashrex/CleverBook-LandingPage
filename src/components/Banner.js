
export const Banner = () => {
  
  return (
    <section className="banner" id="home" style={{background:"#151218"}}>
      <div className="hero-home-section text-white padding-top-bottom-120">
          <div className="container">
            <div className="hero-blocks right-side">
              <img style={{position:"absolute",width:"40%",right:"0%",top:"2.5%"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" loading="eager" alt="every order fulfilled" className="hero-dashboard-img"/>

              <img style={{width:"35%",position:"absolute",top:"1%",right:"-10%"}}src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d23caea3ebf_gradient-bg.svg" loading="eager" alt="back-svg"/>
             
            </div>
          <div className="home-hero-wrapper">
            <div className="hero-blocks left home-hero">
              <h1>Unlock the pages, <span className="text-gradient">Unleash your mind.</span></h1>
              <div className="text-bx">
                <p>
                  In a world where knowledge is power, one book holds the key to unraveling the mysteries of the universe. Prepare to embark on a journey that will challenge everything you thought you knew.
                </p>
              </div>
              <img style={{width:"15%",marginTop:"3%",left:"24%",position:"absolute"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt=""/>

              <div class="button-wrapper pos-rel">
                <button className="custom-btn"><span className="text-gradient">Get Started With Clever Book</span></button>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    </section>
  )
}
