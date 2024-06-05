import Book from "../assets/img/book2.svg";

export const Features = () => {
    return (
        <section className="features" id="features">
            

            <div className="header-bx">
                <h1 >Clever Book: Transforming Education, One Page at a Time</h1>
            </div>
            <div className="right-section-features">
                <div className="back-gradient"></div>
                <img style={{border:"1px solid transparent"}} src={Book} alt=""/>
            </div>

            <div className="feature-txt-bx">
                <h4>Interactive Learning Experience</h4>
                <p>Clever Book revolutionizes the way you engage with content. Our interactive learning modules include quizzes, flashcards, and videos to enhance understanding and retention.</p>
                <button className="btn-grp">Learn More<span><img style={{width:"18px",marginLeft:"10px"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg" alt=""/></span></button>
            </div>
            <div className="features-list">
                <div className="container px-3 border-t-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Personalized Study Plans</h1>
                </div>
                <div className="container px-3 border-t-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Real-time Progress Tracking</h1>
                </div>
                <div className="container px-3 border-t-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Comprehensive Content Library</h1>
                </div>
                <div className="container px-3 border-t-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Seamless Cross-Platform Access</h1>
                </div>
                <div className="container px-3 border-t-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Collaborative Learning Community</h1>
                </div>
                <div className="container px-3 border-y-2 border-gray-400 py-3 flex lg:flex-row flex-col justify-between gap-5">
                    <h1>Interactive Notes and Highlights</h1>
                </div>

                

              
            </div>
            <div className="button-wrapper pos-rel" style={{display:"flex",justifyContent:"center",marginTop:"3%"}}>
                <button style={{padding:"10px 30px",}} className="custom-btn"><span className="text-gradient">View All Feature</span></button>

            </div>
        </section>
    )
}