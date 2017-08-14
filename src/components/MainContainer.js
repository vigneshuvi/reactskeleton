import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MainContainer extends Component {

  render() {
    const { page } = this.props
    console.log(page);
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        <h1>{page.path}</h1>
      </main>
    );
  }
}


MainContainer.propTypes = {
    page:  PropTypes.object.isRequired
}

// No need to connect()!
export default MainContainer;
