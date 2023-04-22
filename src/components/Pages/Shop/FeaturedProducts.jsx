import React from 'react'
import "./FeaturedProducts.scss"
import Card from './Card'

function FeaturedProducts({item, no}) {
 
  return (
    <>
      <div className='featuredProducts'>
          <div className='top mb-8'>
              <h1 className='text-gray-700'>All products</h1>
          </div>
          <div className='bottom'>
              {item.length > 0 ?
                <>
                  {item && item.map((object, index)=>(
                    <Card key={index} item={object} />
                  ))}
                </>
                :
                <p>No record yet</p>
              }
          </div>
      </div>

    </>
  )
}

export default FeaturedProducts