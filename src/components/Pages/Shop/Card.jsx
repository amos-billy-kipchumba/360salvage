import React from 'react'
import "./Card.scss"
function Card({item}) {


  return (
    <a href='https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479' className='link' id="revelation">
        <div className='card_shop'>
            <div className='image_shop'>
                <img src={item.img} alt="" className='mainImg' />
            </div>
            <h2>{item.title}</h2>
            <div className='prices'>
                <h3>${item.price}</h3>
                <h3>${item.oldPrice}</h3>
            </div>
            <h4>{item.remain} remaining</h4>
        </div>
    </a>
  )
}

export default Card