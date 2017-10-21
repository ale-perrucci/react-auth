import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    if (this.props.auth.loading) {
      return 'Trying to log in';
    }
    else if (this.props.auth.user) {
      return (
        <div>
          <span className="left">Logged in as {this.props.auth.user.email}</span><li><a href="/api/logout">Logout</a></li>
        </div>
      );
      /*
      return (
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
      */
    }
    else {
      return <li><a href="/auth/google">Login with Google</a></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">Logo</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
          
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);