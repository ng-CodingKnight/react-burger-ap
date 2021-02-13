import React, { Fragment, Component } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate( nextProps, nextState) {
        return nextProps.Show !== this.props.Show
    }

    render() {
        let styleClasses = [styles.Modal, styles.Close]
        if (this.props.Show) {
            styleClasses = [styles.Modal, styles.Open]
        }
        return (
            <Fragment>
                <Backdrop show={this.props.Show} closed={this.props.close} />
                <div className={styleClasses.join(' ')}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }

}

export default Modal;

