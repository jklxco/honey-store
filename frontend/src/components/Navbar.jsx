const Navbar = () => {
    return ( 
        <nav>
            <div>HONEY HAVEN</div>
            <ul className='nav-links'>
                <li className='nav-link'><a href="">Home</a></li>
                <li className='nav-link'><a href="">Shop</a></li>
                <li className='nav-link'><a href="">About</a></li>
                <li className='nav-link'><a href="">Contact</a></li>
            </ul>
            <div className="cart">CART</div>
        </nav>
    );
}
 
export default Navbar;