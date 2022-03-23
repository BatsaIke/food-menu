import React, { useState } from 'react';

const Menu = ({items}) => {
const [showmore, setShowmore]=useState(false)

  return <div className='section-center'>
    {items.map((menu)=>{
      const {id, title,img, desc, price}= menu
      return <article key={id} className='menu-item'>

       <img className='photo' src={img} alt={title} />
       <div className='item-info'>
         <header>
           <h4>{title}</h4>
           <h4 className='price'>{price}</h4>
         </header>
        <p className='item-text'>{showmore? desc:`${desc.substring(0,100)}...`}
        
        </p>
       </div>
      </article>
    })}
  </div>;
};

export default Menu;
