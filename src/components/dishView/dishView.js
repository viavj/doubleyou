import React from 'react'
import './dishView.css'

const dishView = props => {

    console.log(props.dish)

    const renderDish = Object.keys(props.dish).length ?
        <div className='dishView-container'>
            <div className='dishView-images'>
                <img src={props.dish.description.imgs[0].url} />
                <img src={props.dish.description.imgs[1].url} />
                <img src={props.dish.description.imgs[2].url} />
            </div>

            <div>
                <h1>{props.dish.name}</h1>
                <h1>{props.dish.description.title}</h1>
                <hr />
                <p className='recommendations'><i>Recomended by {props.dish.description.recommended} people</i></p>
                <p>{props.dish.description.text[0]}</p>
                <br />
                <br />
                <p>{props.dish.description.text[1]}</p>
            </div>
        </div>
        : null

    return (
        renderDish

    )
}
export default dishView