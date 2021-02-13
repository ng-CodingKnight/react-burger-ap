import React, { Fragment } from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }
    return (
        <Fragment>
            <div className={styles.backdropShow}>
                <BackDrop show={props.open} closed={props.closed} />
            </div>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer;