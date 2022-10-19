import React from 'react'
import { Link } from "react-router-dom";

import confused from '../public/icons/confused.png'

const Dashboard = () => {
    return (
        <div className='container' style={{ marginTop: "20vh" }}>

            <div class="text-center">

                {/* <div class="col-lg-6 mx-auto"> */}
                {/* <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div> */}
                {/* </div> */}
            </div>

            {/* //* ROW */}
            <div className='row mt-4'>

                {/* //* COL */}
                <div className='col-12 text-center'>
                    <img class="mb-4" src={confused} alt="face icon" width="150" height="140" />
                    <h1 class="display-7 fw-bold text-white mb-4">GUESS THE FACE !</h1>

                    <Link className='nav-link' to='person/1/step/1'>
                        <button class="btn btn-lg btn-success w-50" style={{ padding: "0.7rem " }}>START</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Dashboard