import React from 'react'
import './loading.css'
import NIPNG from '../images/NIPNG.png'

export default function Loading() {
    return (
        <section style={{opacity:0.6}} id="spinner" className="d-none">
            <div>
                <h2>Loading Data</h2>
        
                <img style={{marginTop:"80px"}} className="rotate" src={NIPNG} alt="Sports Integrated Logo"/>           
             </div>
        </section>
        
     
    
    )
}
