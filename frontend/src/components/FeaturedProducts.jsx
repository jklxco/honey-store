import Image from '../assets/honey-jar-1.png'

const FeaturedProducts = () => {
    
    return ( 
        <section className='featured-products'>
            <h1>Featured Products</h1>
            <div className="products-container">
                <div className="product-preview">
                    <img src={Image} alt="honey-product-image" />
                    <div className="product-details">
                        <p>Honey</p>
                        <p className="price">£14.99</p>
                    </div>
                </div>
                <div className="product-preview">
                    <img src={Image} alt="honey-product-image" />
                    <div className="product-details">
                        <p>Honey</p>
                        <p className="price">£14.99</p>
                    </div>
                </div>
                <div className="product-preview">
                    <img src={Image} alt="honey-product-image" />
                    <div className="product-details">
                        <p>Honey</p>
                        <p className="price">£14.99</p>
                    </div>
                </div>
            </div>
        </section>
        
     );
}
 
export default FeaturedProducts;