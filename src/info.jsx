import { useState } from 'react'

import './index.css'
import React from 'react'


export default function Info (props) {



    const dutiesElement = props.duties.map((item, index)=> {
        return (
            <div key={index} className='flex items-center space-x-3'>
                        <p className="text-sky-400">
                            <i className="fa-solid fa-angles-right "></i>
                        </p>

                        <p>{item}</p>
            </div>
        )
    })
    
    return (
            <section className="flex-col space-y-6 md:w-[70%] p-2">
                <div className="tracking-wider space-y-2">
                    <h1 className="text-zinc-800 font-semibold">
                        {props.title}
                    </h1>
                    <h3 className="bg-neutral-300 px-2 py-1 rounded-sm inline-block">{props.company}</h3>
                    <p className="text-zinc-500">
                       {props.dates}
                    </p>
                </div>
                <article className="flex-col space-y-3">
                    {dutiesElement}
                </article>
            </section>
    )
}