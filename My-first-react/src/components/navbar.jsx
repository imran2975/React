import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Items{' '}
                        <span className="badge badge-pill bg-secondary">{this.props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;
