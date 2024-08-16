import React from 'react'

function Item(data) {
  return (
      <div className='itemContainer'>
        <img src={data.src} alt="" className='itemImage'/>
        <div className='itemTextContainer'>
            <h2 className='itemTitle'>{data.title}</h2>
            <hr />
            <p className='itemDescription'>{data.description}</p>
        </div>
      </div>
  )
}

export default Item
