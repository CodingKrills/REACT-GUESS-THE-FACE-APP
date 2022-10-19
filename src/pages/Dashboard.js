import React from 'react'
import { Link } from "react-router-dom";

import confused from '../public/icons/confused.png'

const Dashboard = () => {

    // const { width, height } = useWindowSize()

    return (
        <div className='container' style={{ marginTop: "20vh" }}>

            {/* //* ROW */}
            <div className='row mt-4'>

                {/* //* COL */}
                <div className='col-12 text-center'>
                    <img class="mb-4" src={confused} alt="face icon" width="150" height="140" />
                    <h1 class="display-7 fw-bold text-white mb-4">TEST YOUR FANDOM !</h1>
                    <p class="lead mb-4 text-white">Can You Guess These Famous Faces From Just A Portion Of Their Face ?</p>

                    <Link className='nav-link' to='person/1/step/1'>
                        <button class="btn btn-lg btn-success w-50" style={{ padding: "0.7rem " }}>START</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Dashboard