import React from 'react'
import { Link } from "react-router-dom";

import confused from '../public/icons/confused.png'

const Dashboard = () => {
    return (
        <div className='container' style={{ marginTop: "20vh" }}>

            <div class="text-center">
                <img class="img-fluid mb-4" src={confused} alt="" width="102" height="87" />
                <h1 class="display-7 fw-bold text-white">GUESS THE FACE !</h1>
                {/* <div class="col-lg-6 mx-auto"> */}
                {/* <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div> */}
                {/* </div> */}
            </div>

            {/* //* ROW */}
            <div className='row justify-content-center mt-4'>

                {/* //* COL */}
                <div className='col-3'>
                    <Link className='nav-link text-center' to='person/1/step/1'>
                        <button class="btn btn-lg btn-success">START</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Dashboard