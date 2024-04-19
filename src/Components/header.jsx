// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/style.scss'
function Header() {
    return (
        <header>
            <div className="header--content">
                <a className="name" href="#">Arctic Articles</a>
                <ul className="header--nav">
                    <li>Feed</li>
                    <li>About</li>
                    <li>Write</li>
                </ul>
                <div className="header--buttons">
                    <button className="signup--button">Sign Up</button>
                    <button className="signin--button">Sign In</button>
                </div>
            </div>
        </header>
    );
}

export default Header;