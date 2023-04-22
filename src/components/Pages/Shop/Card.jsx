import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
function Card({item}) {


  return (
    <Link className='link' to={`/`} id="revelation">
        <div className='card_shop'>
            <div className='image_shop'>
                <span>{item.isNew === true ? 'New' : 'Second hand' }</span>
                <img src={item.img} alt="" className='mainImg' />
                <img src={item.img2} alt="" className='secondImg' />
            </div>
            <h2>{item.title}</h2>
            <div className='prices'>
                <h3>${item.price}</h3>
                <h3>${item.oldPrice}</h3>
            </div>
            <h4>{item.remain} remaining</h4>
        </div>
    </Link>
  )
}

export default Card