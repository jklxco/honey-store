import Image_Bees from '../assets/bees.jpg'
import Image_Beekeeper from '../assets/beekeeper.jpg'


const WhyUs = () => {
    return ( 
        <section className="why-us-section">

            <div className="custom-shape-divider-top-1709899883">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            
            <div className="why-us-card">
                <div className="why-us-text">
                    <h3>Locally-Sourced</h3>
                    <p>Honey Haven proudly supports UK beekeeping families with every jar. Our commitment to local sourcing ensures that each spoonful of our raw honey encapsulates the essence of our British landscapes.</p>
                </div>
                <img src={Image_Bees} alt="" className="why-us-img" />
            </div>

            <div className="why-us-card">
                <div className="why-us-text">
                    <h3>Environmentally Sustainable</h3>
                    <p>We prioritize eco-friendly methods and habitat preservation to ensure the well-being of our vital pollinators. With Honey Haven, you contribute to the protection of bee populations and the sustainability of our ecosystems.</p>    
                </div>
                <img src={Image_Beekeeper} alt="" className="why-us-img" />
            </div>

            <div className="custom-shape-divider-bottom-1709899597">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
     );
}
 
export default WhyUs;