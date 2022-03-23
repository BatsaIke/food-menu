import React from 'react';

const Categories = ({categories, filterItems}) => {
 
  return (
    <main className="btn-container">
      
      {categories.map((category,index)=>{
        return <button type='button' className='filter-btn' key={index} 
        onClick={()=>filterItems(category)}>
          {category} </button>
      })}
      
    </main>
  );
};

export default Categories;
