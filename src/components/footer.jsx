import React from 'react'
import Logo from '../assets/Library.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom'
const Footer   = () => {
  return (
    <div className="container">
            <Link to="/">
                <figure className="footer__logo">
                    <img src={Logo} alt="" className="footer__logo--img" />
                </figure>
            </Link>
        <div className="row row__column">
            <div className="footer__list">
                <Link to="/home" className="footer__link">Home</Link>
                <Link to="" className="footer__link no-cursor">About</Link>
                <Link to="/books" className="footer__link">Books</Link>
                <Link to="/cart" className="footer__link">Cart</Link>

            </div>
            <div className="footer__copyright">
                Copyright &copy; 2023 Library
            </div>
        </div>
    </div>
  )
}

export default Footer