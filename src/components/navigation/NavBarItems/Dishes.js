import React from 'react'

const navBarDishes = props => {

    // If user wants to see the ful list the first time so the data isn't loaded yet
    props.toggleFulList
        &&
        !props.fulDishList.length
        && (props.getFulDishList())

    const dishes = props.toggleFulList ? props.fulDishList : props.sampleDishes
    const renderDishes = dishes.length ? dishes.map(dish => {
        return <p key={dish.id}
            onClick={() => props.getDish(dish.id)}
        >{dish.name}</p>
    })
        : null

    const bottomText = props.toggleFulList ? 'less' : 'more'

    return (

        <div className='section right-separator dropdown' >
            <p>Section 2</p>
            <div className="dropdown-content">
                <h3>All you can eat</h3>
                {renderDishes}

                <h6 onClick={props.toggleFulListFunction}>{bottomText}</h6>
            </div>
        </div>

    )
}

export default navBarDishes