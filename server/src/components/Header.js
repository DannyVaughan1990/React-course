import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a className="left brand logo">
                Daniel Vaughan
                </a>
                <ul className="right">
                    <a>Login with Google</a>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Header;