import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '../MenuIcon/MenuIcon'

const toolBar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <MenuIcon clicked={props.openDraw}/>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.ShowNav}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolBar;