import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="description-navigation">
                <div className="description-nav-box"> Description </div>
                <div className="description-nav-box fade"> Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>“SHOPPER is a contemporary boutique in the heart of downtown. We offer chic and stylish dresses for both men and women. From romantic lace and flowy maxi dresses to edgy leather jackets and timeless trench coats, our store has something for everyone.”</p>
            </div>
        </div>
    )
}

export default DescriptionBox