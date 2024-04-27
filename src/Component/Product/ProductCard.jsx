import React, { memo } from 'react'

function ProductCard(props) {
    const { name, price, des } = props
    return (
        <div>
            <div className="card" style="width: 18rem;">
                <img src="" className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2>{price}</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductCard);
