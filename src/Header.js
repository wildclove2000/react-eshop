
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <Link to="/" style={{textDecoration:"none"}}>
            <div class="header__logo">
                <StorefrontIcon fontSize='large' className='header__logoImage' />
                <h2 className="header__logoTitle">eShop</h2>
            </div>
            </Link>
            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__SearchIcon' />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>

                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration:"none"}}>
                <div className="nav__item">
                    
                <span className="nav__itemLineTwo nav__basketCount">0</span>
               
                    <ShoppingBasketIcon className='nav__itemBasket'/>
                    
                </div>
                </Link>
            </div>
        </div>
    )

}
export default Header