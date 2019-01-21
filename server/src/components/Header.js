import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
            case false:
                return (
                    
                    <li><a href="/auth/google">Log in with Google</a></li>
                );
            default:
                return [
                    <ul className="right hide-on-med-and-down">
                    <li key="1"><Payments /></li>
                    <li key="3" style= {{ margin : '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>
                    <li key="2"><a href="/api/logout" className="black-text">Logout</a></li>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons right">menu</i></a></li>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                 </ul>
                ];
        }
    }

    render() {
        return (          
              
            <nav className=" red black-text">
            
                <div className="nav-wrapper">
                <Link 
                to={this.props.auth ? '/surveys' : '/'}
                className="left brand logo black-text" style={{ marginLeft: '15px'}}
                >
                Daniel Vaughan
                </Link>
                <ul className="right">
                    { this.renderContent() }
                </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);