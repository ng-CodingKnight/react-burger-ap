import React from 'react';
import styles from './Backdrop.module.css';

const backDrop = (props) => {
    return (
        props.show ? <div className={styles.Backdrop}
                        onClick={props.closed}></div> : null
    )
}

export default backDrop;