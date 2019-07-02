
import React, { Component } from 'react';
import logo1 from '../images/Sign96x96.png';

class NavBar extends Component {
    render() {
        return (
            <nav className="top-bar topbar-responsive">
                <div id="topbar-responsive" className="topbar-responsive-links">
                    <div className="top-bar-left">
                        <ul className="menu simple vertical medium-horizontal">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="top-bar-title">
                    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                         { /*  <button className="menu-icon" type="button" data-toggle /> */}
                    </span>
                    
                    <a className="topbar-responsive-logo" href="#"> <i>Trevor Garrity</i></a>
                    <img alt="Trevor logo" src={logo1}/>
                </div>
            </nav>
        );
    }
}
export default NavBar;