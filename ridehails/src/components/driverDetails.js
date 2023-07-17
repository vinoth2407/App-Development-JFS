import React, { Component } from 'react'
import pick from '../assests/pickup.jpeg'
import './details.css'
import afford from '../assests/affordable.jpeg'
import stop from '../assests/stopwatch.jpeg'
import man from '../assests/man.jpeg'
import earn from '../assests/earn.jpeg'
import insure from '../assests/insure.jpeg'
import { height } from '@mui/system'
function Driv() {
    return ( 
        <>
        <h1 style={{marginLeft:'39rem'}}>Drivers</h1>
    <div class="card cv" style={{width: '21rem',height: '391px'}}>
        <div class="card-body">
            <h5 class="card-title jj">Zero-Pressure Rides</h5>
            <img className='bk-img' src={man}/>
            <p className='io'>Gives a Driver more room in a day without hampering their daily activities.</p>
        </div>
    </div>

    <div class="card cb" style={{width: '21rem', height: '391px' }}>
    <div class="card-body">
        <h5 class="card-title jj">Redeemable Earnings</h5>
        <img className='bk-img' src={earn}/>
        <p>Redeems can be transferred from EasyGo wallet to your bank account at your convenience.</p>
    </div>
    </div>

    <div class="card cn" style={{width: '21rem', height: '391px'}}>
    <div class="card-body">
        <h5 class="card-title jj">Insured Rides</h5>
        <img className='bk-img' src={insure}/>
        <p>All rides are insured.Accidental coverage and medical benefits covered up to Rs 5 Lakh for Captain & family.</p>
    </div>
    </div>
    
        </>
     );
}

export default Driv;