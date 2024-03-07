import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from './components/FeaturedProducts';
import WhyUs from './components/WhyUs';

const App = () => {
  return ( 
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyUs />
      
    </>
    
   );
}
 
export default App;
