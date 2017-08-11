import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoadPost from '../components/LoadPost'
import MyForm from '../components/MyForm'
import * as AllActions from '../actions'

const App = ({user, posts, actions}) => (
  <div>
    <MyForm user={user} loginUser={actions.loginUser}/>
    <LoadPost user={user} posts={posts} addPost={actions.addPost} fetchTweets={actions.fetchTweets} />
  </div>
)

App.propTypes = {
  posts: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
