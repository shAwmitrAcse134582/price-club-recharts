import React from 'react';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {features}=option;
    return (
        
    <div className='bg-blue-400 m-5 rounded-md text-white font-bold p-4'>
        <div>
         <h1>id:{option.id}</h1>
          <p>name:{option.name}</p>
        <p className='text-3xl text-orange-300'>price:{option.price}</p>
        </div>
        
      {
        features.map((feature,idx)=><Feature
        key={idx}
        feature={feature}
        ></Feature>)
      }
      <button className='bg-green-500 w-full rounded-md py-2 mt-3 font-bold'>Buy Now</button>
       </div>
        
    );
};

export default PriceOption;