import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className='modalMessage'>
          {this.props.message}
        </div>
        <button
          className="btn btn-outline-secondary"
          onClick={this.props.closeModal}>
          {this.props.confirm}
        </button>
      </div>
    )
  }
}
Modal.propTypes = {
  message: PropTypes.string,
  confirm: PropTypes.string,
  closeModal: PropTypes.func
}

export default Modal