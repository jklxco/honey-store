import Image_Bees from '../assets/bees.jpg'
import Image_Beekeeper from '../assets/beekeeper.jpg'


const WhyUs = () => {
    return ( 
        <section className="why-us-section">
            <h1>Why Us?</h1>
            
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
        </section>
     );
}
 
export default WhyUs;