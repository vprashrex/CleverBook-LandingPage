import Logo from "../assets/img/footerLogo.png";
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export const Footer = () => {
    return (
        <Router>
            <footer style={{ width: "100%", marginTop: "10%" }} className="footer footer-section">
            
                <div style={{display:"flex"}}>
                    <div className="footer-card footer-card-animated" style={{display:"flex",flexDirection:"column"}}>
                        <div style={{width:"100%",alignContent:"center",justifyContent:"center",alignItems:"center"}}>
                            <h1 style={{justifyContent:"center",alignItems:"center",textAlign:"center"}}>You can grow faster than you think!</h1>
                            <p style={{textAlign:"center",width:"55%",justifyContent:"center",alignItems:"center",marginLeft:"25%"}}>
                                Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
                            </p>
                            <button className="footer-btn">Get Started With Clever Book</button>
                        </div>
                        
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div style={{marginTop:"5%",marginLeft:"5%"}}>
                        <div className="logo-footer" >
                            <div>
                                <img style={{width:"40%"}} src={Logo} alt=""/>

                            </div>
                        
                        </div>
                        <div className="text-white ml-3 mt-10" style={{width:"80%",fontSize:"16px",fontWeight:"500"}}>
                            <p style={{lineHeight:"28px"}}>CleverBook is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                        </div>
                        
                        
                    </div>

                    <div style={{marginTop:"8%",marginRight:"10%"}}>
                    <p style={{color:"white"}}>Explore</p>
                    <p className="mt-4" style={{color:"#C5C5C4"}}>Product</p>
                    <p className="mt-3" style={{color:"#C5C5C4"}}>Pricing</p>
                    <p className="mt-3" style={{ color:"#C5C5C4",display: "flex", whiteSpace: "nowrap" }}>Customer Stories</p>
                    <p className="mt-3" style={{ color:"#C5C5C4",display: "flex", whiteSpace: "nowrap" }}>Carrer</p>
                    </div>
                    <div style={{marginTop:"8%",marginRight:"10%"}}>
                    <p style={{color:"white"}}>Learn</p>
                    <p className="mt-4" style={{color:"#C5C5C4",whiteSpace: "nowrap" }}>About us</p>
                    <p className="mt-3" style={{color:"#C5C5C4"}}>Blog</p>
                    </div>
                    <div style={{marginTop:"8%",marginRight:"10%",whiteSpace:"nowrap"}}>
                        <p style={{color:"white"}}>Contact Clever Book</p>
                        <p style={{color:"#C5C5C4"}}>sales@getcrest.ai</p>
                        <p style={{color:"#C5C5C4",whiteSpace: "nowrap",lineHeight:"28px" }}>
                            Registered Office:<br></br>
                            1507, Incubex, 11th cross road, <br></br>19th Main Road, Bengaluru,<br></br> India. 560102
                        </p>
                        <p style={{color:"#C5C5C4",whiteSpace: "nowrap",lineHeight:"28px" }}>
                            Corporate Office::<br></br>
                            291, All Time Space, 4th Floor, <br></br>15th A Cross, Sector - 6,<br></br>HSR Layout, Bengaluru,<br></br>India. 560102
                        </p>
                    </div>
                </div>
                <div className="mt-10 text-white" style={{display:"flex",flexDirection:"row",marginLeft:"5%"}}>
                    <p className="mr-8">Copyright 2024 Clever Book</p>
                    <p className="mr-8">Terms of Service</p>
                    <p className="mr-8">Privacy Policy</p>

                </div>
                <div className="mt-10 text-white" style={{marginLeft:"5%"}}>
                    <p className="mr-8">Conifer Innovations Private Limited<br></br>
                    CIN: U72900KA2022PTC163144</p>


                </div>

                <HashLink to='#home'>
                    <img style={{width:"4%",position:"absolute",right:"10%"}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg" alt=""/>
                </HashLink>
               
            </footer>
        </Router>
    )
}
