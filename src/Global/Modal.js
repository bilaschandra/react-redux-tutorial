"use strict";

import React, {Component} from 'react';
import ReactModal from 'react-modal';

ReactModal.defaultStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : ''
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

export default class Modal extends Component {
    render() {
        let header = this.props.header
            ? <div>{this.props.header}</div>
            : '';

        let footer = this.props.footer
                ? <div>{this.props.footer}</div>
                : '';
        let modifierClass = '';
        if (this.props.size === 'small') {
            modifierClass += 'modal-sm';
        }
        if (this.props.size === 'large') {
            modifierClass += 'modal-lg';
        }
        if (this.props.size === 'full') {
            modifierClass += 'modal-full';
        }
        return (
            <ReactModal {...this.props}>
                <div className="modal-content">
                    <div className="modal-header">{header}</div>
                    <div className="modal-body">{this.props.children}</div>
                    <div className="modal-footer">{footer}</div>
                </div>
            </ReactModal>
        );
    }
}
