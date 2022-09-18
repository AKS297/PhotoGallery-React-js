import logo from './logo.svg';
import './App.css';
import Images from './Images';
import { useState } from 'react';

function App() {
  const[selectedImage,setSelectedImage]=useState (Images[0])
  return (
    <div className="App">
     <div className='container'>
     <img src={selectedImage} alt='selectedImage' className='selected' />
     <div className='imageHolder'>
      {
        Images.map((img,index)=>(
          <img 
          style={{border:selectedImage ===img ? "4px solid purple" :""}}
          key={index} src={img} alt='image'
          onClick={()=> setSelectedImage(img)}
           />
         
        ))
      }
     </div>

     </div>
    </div>
  );
}

export default App;
