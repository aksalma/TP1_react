import React, { useState } from 'react'


export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{

 setExp('');
}

const result=()=>{
 try {
 let v=exp;
    setExp(eval(v));
    
   }
 catch(error){
    setExp('expression non valide')
 }
}
const tapecar=(e)=>{


let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

 return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='container w-25 p-5 ' style={{ backgroundColor: '#ccc',borderRadius: '10px'}}>
            <div className='d-flex justify-content-between align-items-center'>
         <input value={exp} type="text" className='form-control bg-light text-dark' />
         <input onClick={clear} type="button" value="C" className='btn btn-danger '/>
         </div>
       
       <div className='d-flex justify-content-between align-items-center w-100  p-1 '>
      <input onClick={(e)=>tapecar(e)} type="button" value="1" className='w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="2" className='w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="3" className=' w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="+" className=' w-25 p-2 mx-1 btn btn-primary' />
      </div>
     
      <div className='d-flex justify-content-between align-items-center w-100 p-1 '>
      <input onClick={(e)=>tapecar(e)} type="button" value="4" className='w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="5" className=' w-25 p-2 mx- 1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="6" className='w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="-" className='w-25 p-2 mx-1 btn btn-primary' />
      </div>
      
      <div className='d-flex justify-content-between align-items-center w-100 p-1 '>
      <input onClick={(e)=>tapecar(e)} type="button" value="7" className='w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="8" className=' w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="9" className=' w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="*" className=' w-25 p-2 mx-1 btn btn-primary' />
      </div>
    
      <div className='d-flex justify-content-between align-items-center w-100 p-1 '>
      <input onClick={(e)=>tapecar(e)} type="button" value="." className='w-25 mx-1 p-2 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="0" className=' w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={result} type="button" value="=" className=' w-25 p-2 mx-1 btn btn-secondary' />
      <input onClick={(e)=>tapecar(e)} type="button" value="/" className='p-2 w-25 mx-1 btn btn-primary' />
      </div>
      
      </div>
    </div>
 )
}