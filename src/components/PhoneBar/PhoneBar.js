import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
   
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phonesLoaded=data.data.data;
            const phonedata=phonesLoaded.map(phone=>{
                const parts=phone.slug.split('-');
                const price=parseInt(parts[1]);
                const singlePhone={
                    name:phone.phone_name,
                    price:price,
                }
                return singlePhone;
            })
            setPhones(phonedata);
        });

    },[])
    return (
        <BarChart width={550} height={300} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
      </BarChart>
    );
};

export default PhoneBar;