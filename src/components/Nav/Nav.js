import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

const Nav = () => {
    const [open,setOpen]=useState(false);
    const routes=[
        {
            id:1,
            name:"Home",
            path:"/Home"
        },
        {
            id:2,
            name:"products",
            path:"/Products"
        },
        {
            id:3,
            name:"orders",
            path:"/Orders"
        },
        {
            id:4,
            name:"Contacts",
            path:"/constacts"
        },
        {
            id:5,
            name:"About",
            path:"/About"
        }


    ]
    return (
        <nav className='bg-blue-950 w-full'>
            <div onClick={()=>setOpen(!open)} className="h-6  text-yellow-400 w-6 md:hidden ">
            {
                open?<XMarkIcon/>
                :<Bars3Icon/>
            }     
            </div>
            <ul className={`md:flex bg-blue-950 text-yellow-400  w-full justify-center absolute md:static duration-500 ease-in ${open? 'top-6': 'top-[-120px]'}`}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;