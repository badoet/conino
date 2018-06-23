import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TopNav extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = {

    };
  }

  reloadPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-custom">
          <a className="navbar-brand navbar-text-custom pointer" onClick={this.reloadPage}>conino</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>
    );
  };
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(TopNav);
