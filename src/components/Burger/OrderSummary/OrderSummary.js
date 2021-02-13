import React, { Fragment } from 'react';
import styles from './OrderSummary.module.css';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : &#8377; {props.totalPrice}</strong></p>
            <p>Continue to Checkout. . .</p>
            <Button btnType="Success" clicked={props.orderContinue}>Proceed</Button>
            <Button btnType="Danger" clicked={props.orderDisable}>Cancel</Button>
        </Fragment>

    )
}

export default orderSummary;