import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <img className='foto' src="IconWhite.png" alt="encabezado" />
            <ul className='menu_navBar'>
                <li><Link className='navBar_item' to='/'> #Home   //</Link></li>
                <li><Link className='navBar_item' to='/AboutMe'>#AboutMe   //</Link></li>
                <li><Link className='navBar_item' to='/Skills'>#Skills   //</Link></li>
                <li><Link className='navBar_item' to='MyWork'>#MyWork   //</Link></li>
                <li><Link className='navBar_item' to='/Contact'>#Contact   //</Link></li>
            </ul>
        </div>
    )
}

export default Header