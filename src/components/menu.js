import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component{

    render(){
        return(
            <nav>
                <div className="nav-wrapper indigo">
                    <Link to="/" className="left brand-logo">Basics</Link>
                    <ul className="right">
                        <li key="1"><Link to="/">Home</Link></li>
                        <li key="2"><Link to="/videos">Videos</Link></li>
                        <li key="3"><Link to="/weather">Weather</Link></li>
                        <li key="4"><Link to="/posts">Blog</Link></li>
                    </ul>
                </div>
            </nav>   
        );
    }
}