import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Intro from './Intro.js';

//adding the 'all' to the items in the array
const allcategories =[...new Set (items.map((item)=>item.category))]

function App() {
  const [menuItem, setMenuItems]=useState(items)
  const [categories, setcategories]=useState(allcategories)

  const filterItems =(category)=>{
    if (category==="all"){
      setMenuItems(items)
      return
    }
    const newItem =items.filter((item)=>item.category===category)
    setMenuItems(newItem)
  }


  return <main>
    <section className='menu section'> 
    <div className='title'>
      <h2>Our menu</h2>
      <div className='underline'> </div>
      </div>
      
      <Categories categories={categories} filterItems={filterItems} />
      <Menu  items={menuItem}/> 
      </section>
  </main>;
}

export default App;
