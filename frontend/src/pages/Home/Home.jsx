import Hero from "./components/Hero";
import FeaturedProducts from './components/FeaturedProducts';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';

const Home = () => {
    return ( 
        <>
            <Hero />
            <FeaturedProducts />
            <WhyUs />
            <Testimonials />
        </>
     );
}
 
export default Home;