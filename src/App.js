import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Faq } from './components/Faq';
import { KeyMetrics } from './components/KeyMetrics';
import { ReviewSection } from './components/ReviewSection';
import { Features } from './components/Features';
import {Cta} from "./components/Cta";
import { Founder } from './components/Founder';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Faq/>
      <KeyMetrics/>
      <ReviewSection/>
      <Features/>
      <Cta/>
      <Founder/>
      <Footer/>
    </div>
  );
}

export default App;
