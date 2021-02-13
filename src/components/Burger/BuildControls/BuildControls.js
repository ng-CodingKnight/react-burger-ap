import React from 'react';
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {
    let controls = Object.keys(props.controls).map( (control, i) => {
        return <BuildControl 
                label={control} 
                added={() => props.ingredientAdded(control)}
                removed={() => props.ingredientRemoved(control)}
                disabledInfo={props.disabled[control]}
                key={control+i}/>
    })

    return (
        <div className={styles.BuildControls}>
            <p>Current Price : <strong>&#8377; {props.price}</strong></p>
            {controls}
            <button 
                className={styles.order}
                disabled={!props.isPurchase}
                onClick={props.orderNow}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;