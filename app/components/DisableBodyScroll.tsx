import React, { Component } from 'react'

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add('overflow-y-hidden')
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow-y-hidden')
  }

  render() {
    return false
  }
}

export default DisableBodyScroll
