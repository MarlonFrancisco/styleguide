import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as ReactModal from 'react-modal'
import Button from '../Button'
import CloseIcon from '../icon/Close'
import config from 'vtex-tachyons/config.json'

ReactModal.setAppElement('body')

class Modal extends PureComponent {
  handlePrimaryClick = event => this.props.primaryAction && this.props.primaryAction.onClick(event)

  handleSecondaryClick = event => this.props.secondaryAction && this.props.secondaryAction.onClick(event)

  handleClose = event => this.props.onClose()

  render() {
    const {
      title,
      content,
      isOpen,
      style,
      primaryAction,
      secondaryAction,
    } = this.props
    return (
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick
        onRequestClose={this.handleClose}
        overlayClassName={`fixed bg-transparent ${
          style.modaloverlay
        } z-4 top-0 bottom-0 right-0 left-0 flex items-center justify-center`}
        className={`fixed z-5 ${
          style.modalheight
        } overflow-auto outline-0 w-50 mw7 bg-white o-100 b--light-gray br2`}
      >
        <div className="pa8">
          <div className={`${title ? 'flex justify-between mb7' : 'mb2'}`}>
            {title && <div className="f3 b near-black">{title}</div>}
            <div className="tr">
              <button
                className="pointer bg-transparent b--transparent outline-0"
                onClick={this.handleClose}
              >
                <CloseIcon color={config.colors['near-black']} size={12} />
              </button>
            </div>
          </div>
          <div className="f5 fw4 near-black">{content}</div>
          {(primaryAction || secondaryAction) && (
            <div className="flex justify-around fr mv8">
              {secondaryAction && (
                <div className="mr5">
                  <Button secondary onClick={this.handleSecondaryClick}>
                    {secondaryAction.label}
                  </Button>
                </div>
              )}
              {primaryAction && (
                <Button primary onClick={this.handlePrimaryClick}>
                  {primaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.shape({
    modalheight: PropTypes.string.isRequired,
    modaloverlay: PropTypes.string.isRequired,
  }).isRequired,
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
}

Modal.defaultProps = {
  isOpen: false,
}

export default Modal
