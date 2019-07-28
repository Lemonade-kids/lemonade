import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className='modalMessage'>
          {this.props.message}
        </div>
        <button
          className="btn btn-outline-secondary modalBtn"
          onClick={this.props.closeModal}>
          {this.props.confirm}
        </button>
      </div>
    )
  }
}
Modal.propTypes = {
  message: PropTypes.any,
  confirm: PropTypes.string,
  closeModal: PropTypes.func
}

export default Modal