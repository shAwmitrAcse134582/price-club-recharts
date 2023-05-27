import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricingOption=[
        {
            id:1,
            name:"free",
            price:0,
            features:[
                'awesome',
                'excellent',
                'wonderful',
                'beautiful'
            ]
        },
        {
            id:2,
            name:"medium",
            price:9.20,
            features:[
                'awesome',
                'excellent',
                'wonderful',
                'beautiful'
            ]
        },
        {
            id:3,
            name:"premium",
            price:19.50,
            features:[
                'awesome',
                'excellent',
                'wonderful',
                'beautiful'
            ]
        }
    ]
    return (
        <div>
            <h2 className='text-5xl bg-blue-400 text-white p-4'>Best Deal in market</h2>
           <div className='grid md:grid-cols-3 gap-3 mt-4'>
           {
                pricingOption.map(option=>    
               <PriceOption
               key={option.id}
               option={option}
               ></PriceOption>
                    
                    )
            }
           </div>
           
        </div>
    );
};

export default Pricing;