import React from 'react';
import styles from './MenuIcon.module.css';

const menuIcon = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default menuIcon;

