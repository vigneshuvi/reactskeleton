import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MainContainer extends Component {

  render() {
    const { page } = this.props
    console.log(page);
    return (
      <div>
        <h1>{page.path}</h1>
      </div>
    );
  }
}


MainContainer.propTypes = {
    page:  PropTypes.object.isRequired
}

// No need to connect()!
export default MainContainer;
