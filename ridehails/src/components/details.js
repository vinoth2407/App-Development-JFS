import React, { Component } from 'react'
import pick from '../assests/pickup.jpeg'
import './details.css'
import afford from '../assests/affordable.jpeg'
import stop from '../assests/stopwatch.jpeg'
import { height } from '@mui/system'
function Blog() {
    return ( 
        <>
        <h1 style={{marginLeft:'39rem'}}>Customers</h1>
    <div class="card cv" style={{width: '21rem'}}>
        <div class="card-body">
            <h5 class="card-title jj">DoorStep Pick-Up</h5>
            <img className='bk-img' src={pick}/>
            <p className='io'>We will pick you up from where you are and drop you exactly where you need to be.</p>
        </div>
    </div>

    <div class="card cb" style={{width: '21rem', height: '391px' }}>
    <div class="card-body">
        <h5 class="card-title jj">Affordable</h5>
        <img className='bk-img' src={afford}/>
        <p>No more latent prices and shocked reactions after seeing the final ride cost.</p>
    </div>
    </div>

    <div class="card cn" style={{width: '21rem', height: '391px'}}>
    <div class="card-body">
        <h5 class="card-title jj">Quick Ride</h5>
        <img className='bk-img' src={stop}/>
        <p>Trend setters of smart commute be it traffic or rush hours.</p>
    </div>
    </div>
    
        </>
     );
}

export default Blog;