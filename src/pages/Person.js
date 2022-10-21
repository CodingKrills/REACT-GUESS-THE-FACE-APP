import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Confetti from 'react-confetti'

// * Imports
import '../public/css/overlay.css'

import arraowLeft from '../public/icons/arrow-left.png'

import p1 from '../public/persons/1.jpg'
import p2 from '../public/persons/2.jpg'
import p3 from '../public/persons/3.jpg'
import p4 from '../public/persons/4.jpg'
import p5 from '../public/persons/5.jpg'
import p6 from '../public/persons/6.jpg'
import p7 from '../public/persons/7.jpg'
import p8 from '../public/persons/8.jpg'
import p9 from '../public/persons/9.png'
import p10 from '../public/persons/10.jpg'
import p11 from '../public/persons/11.jpg'
import p12 from '../public/persons/12.jpg'
import p13 from '../public/persons/13.jpg'
import p14 from '../public/persons/14.jpeg'
import p15 from '../public/persons/15.jpg'
import p16 from '../public/persons/16.jpg'
import p17 from '../public/persons/17.jpg'
import p18 from '../public/persons/18.jpg'
import p19 from '../public/persons/19.jpg'
import p20 from '../public/persons/20.jpg'
import p21 from '../public/persons/21.jpg'


const Person = () => {

    const { personId, stepId } = useParams();

    const [pId, setPid] = useState(null);
    const [sId, setSid] = useState(null);

    console.log(pId, sId)

    useEffect(() => {

        setPid(Number(personId))
        setSid(Number(stepId))

    }, [personId, stepId])

    return (
        <div className='container' style={{ marginTop: "4vh" }}>

            {pId !== 21 &&

                <div>
                    <div className='row row-cols-auto'>

                        <div className='col my-auto'>
                            <Link className='text-white link' to="/">
                                <img class="me-2" src={arraowLeft} alt="face icon" width="30" height="30" />
                                <b>HOME</b>
                            </Link>-
                        </div>

                        <div className='col my-auto'>
                            <h6 className='text-white'>PERSON - <b>{pId}</b></h6>
                        </div>
                        <div className='col my-auto'>
                            <h6 className='text-white'>STEP - <b>{sId}</b></h6>
                        </div>
                    </div>
                    <hr />
                </div>

            }

            <div className='text-center'>

                {/* // * person 1  =========================================================================================== */}

                {pId === 1 && sId === 1 &&
                    <>
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                            <div className="overlay-top-step-one"></div>
                            <div className="overlay-right-step-one"></div>
                            <div className="overlay-bottom-step-one"></div>
                            <div className="overlay-left-step-one"></div>
                        </div>
                    </>
                }

                {pId === 1 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 1 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 1 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 1 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        MS Dhoni
                                    </b>
                                    - Captain cool
                                </p>
                            </div>
                        </div>
                    </>

                }

                {/* // * person 1  =========================================================================================== */}

                {/* // * person 2  ===========================================================================================*/}

                {pId === 2 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 2 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 2 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 2 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 2 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Sushma Swaraj
                                    </b>
                                    - Ex External Affairs Minister
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 2  ===========================================================================================*/}

                {/* // * person 3  ===========================================================================================*/}

                {pId === 3 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 3 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 3 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 3 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 3 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Sandeep Maheshwari
                                    </b>
                                    - Motivational Speaker
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 3  ===========================================================================================*/}

                {/* // * person 4  ===========================================================================================*/}

                {pId === 4 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 4 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 4 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 4 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 4 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Sundar Pichai
                                    </b>
                                    - CEO of Google
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 4  ===========================================================================================*/}

                {/* // * person 5  ===========================================================================================*/}

                {pId === 5 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 5 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 5 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 5 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 5 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Neeraj Chopra
                                    </b>
                                    - Gold medalist
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 5  ===========================================================================================*/}

                {/* // * person 6  ===========================================================================================*/}

                {pId === 6 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 6 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 6 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 6 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 6 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Aishwarya Rai
                                    </b>
                                    - Miss World / Actress
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 6  ===========================================================================================*/}

                {/* // * person 7  ===========================================================================================*/}

                {pId === 7 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 7 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 7 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 7 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 7 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Rakesh Jhunjhunwala
                                    </b>
                                    - Indian business magnate
                                </p>
                            </div>
                        </div>
                    </>
                }

                {/* // * person 7  ===========================================================================================*/}

                {/* // * person 8  ===========================================================================================*/}

                {pId === 8 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 8 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 8 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 8 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 8 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Ramdev Baba
                                    </b>
                                    - Yoga Guru
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 8  ===========================================================================================*/}

                {/* // * person 9  ===========================================================================================*/}

                {pId === 9 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 9 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 9 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 9 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 9 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Rajat Sharma
                                    </b>
                                    - News Anchor
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 9  ===========================================================================================*/}

                {/* // * person 10  ===========================================================================================*/}

                {pId === 10 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 10 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 10 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 10 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 10 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Rashmika Mandanna
                                    </b>
                                    - Actress
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 10  ===========================================================================================*/}

                {/* // * person 11  ===========================================================================================*/}

                {pId === 11 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 11 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 11 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 11 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 11 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        A. P. J. Abdul Kalam
                                    </b>
                                    - Missile Man of India
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 11  ===========================================================================================*/}

                {/* // * person 12  ===========================================================================================*/}

                {pId === 12 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 12 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 12 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 12 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 12 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Sunil Chhetri
                                    </b>
                                    - Captain of Indian Football team
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 12  ===========================================================================================*/}

                {/* // * person 13  ===========================================================================================*/}

                {pId === 13 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 13 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 13 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 13 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 13 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Rajnikant
                                    </b>
                                    - Thalaivaar
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 13  ===========================================================================================*/}

                {/* // * person 14  ===========================================================================================*/}

                {pId === 14 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 14 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 14 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 14 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 14 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Droupadi Murmu
                                    </b>
                                    - President of India
                                </p>
                            </div>
                        </div>
                    </>
                }

                {/* // * person 14  ===========================================================================================*/}

                {/* // * person 15  ===========================================================================================*/}

                {pId === 15 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 15 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 15 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 15 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 15 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Kapil Sharma
                                    </b>
                                    - India's No. 1 Comedian
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 15  ===========================================================================================*/}

                {/* // * person 16  ===========================================================================================*/}

                {pId === 16 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 16 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 16 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 16 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 16 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Sonu Sood
                                    </b>
                                    - Philanthopist / Actor / Real Hero
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 16  ===========================================================================================*/}

                {/* // * person 17  ===========================================================================================*/}

                {pId === 17 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 17 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 17 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 17 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 17 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Lata Mangeshkar
                                    </b>
                                    - Nightingale of India
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 17  ===========================================================================================*/}

                {/* // * person 18  ===========================================================================================*/}

                {pId === 18 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 18 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 18 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 18 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 18 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Arvind Kejriwal
                                    </b>
                                    - Chief Minister of Delhi
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 18  ===========================================================================================*/}

                {/* // * person 19  ===========================================================================================*/}

                {pId === 19 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 19 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 19 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 19 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 19 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Kiran Bedi
                                    </b>
                                    - First lady IPS
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 19  ===========================================================================================*/}

                {/* // * person 20  ===========================================================================================*/}

                {pId === 20 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
                }

                {pId === 20 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                        <div className="overlay-top-step-two"></div>
                        <div className="overlay-right-step-two"></div>
                        <div className="overlay-bottom-step-two"></div>
                        <div className="overlay-left-step-two"></div>
                    </div>
                }

                {pId === 20 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                        <div className="overlay-top-step-three"></div>
                        <div className="overlay-right-step-three"></div>
                        <div className="overlay-bottom-step-three"></div>
                        <div className="overlay-left-step-three"></div>
                    </div>
                }

                {pId === 20 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                        <div className="overlay-top-step-four"></div>
                        <div className="overlay-right-step-four"></div>
                        <div className="overlay-bottom-step-four"></div>
                        <div className="overlay-left-step-four"></div>
                    </div>
                }


                {pId === 20 && sId === 5 &&
                    <>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='image-container'>
                            <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                            <div className="overlay-name-on-image">
                                <p class="person-name text-white mt-2">
                                    <b className='me-2'>
                                        Rowan Atkinson
                                    </b>
                                    - Mr. Bean
                                </p>
                            </div>
                        </div>

                    </>
                }

                {/* // * person 20  ===========================================================================================*/}

                {/* // * person 21  ===========================================================================================*/}

                {pId === 21 &&

                    <div>
                        <Confetti style={{ height: "100vh" }} />
                        <div className='row justify-content-center'>
                            <img className='img-fluid overlay-image-responsive' src={p21} alt="virat"
                                style={{ width: "auto", height: "90vh" }}
                            />
                        </div>
                    </div>

                }

                {/* // * person 21  ===========================================================================================*/}

            </div>

            <div className='hide-on-phone'>

                {pId !== 21 &&

                    <nav>
                        <ul className="pagination justify-content-center pagination-md text-center mt-4">

                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 1 && pId !== 1 ? 'btn-primary ' : 'btn-outline-primary disabled'}
`}
                                    onClick={() => { setPid(pId - 1); setSid(1) }}>
                                    PREV PERSON
                                </button>
                            </li>


                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 1 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                    onClick={() => setSid(1)}>
                                    1
                                </button>
                            </li>


                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 2 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                    onClick={() => setSid(2)}>
                                    2
                                </button>
                            </li>
                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 3 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                    onClick={() => setSid(3)}>
                                    3
                                </button>
                            </li>
                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 4 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                    onClick={() => setSid(4)}>
                                    4
                                </button>
                            </li>
                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 5 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                    onClick={() => setSid(5)}>
                                    5
                                </button>
                            </li>
                            <li className="page-item px-1" aria-current="page">
                                <button
                                    className={`
btn btn-lg 
${sId === 5 ? 'btn-primary ' : 'btn-outline-primary disabled'}
`}
                                    onClick={() => { setPid(pId + 1); setSid(1) }}>
                                    NEXT PERSON
                                </button>
                            </li>
                        </ul>
                    </nav>
                }


            </div>

            <footer class="footer hide-on-laptop">
                {pId !== 21 &&

                    <div>
                        <hr />

                        <nav>
                            <ul className="pagination pagination-sm">

                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 1 && pId !== 1 ? 'btn-primary ' : 'btn-outline-primary disabled'}
`}
                                        onClick={() => { setPid(pId - 1); setSid(1) }}>
                                        PREV
                                    </button>
                                </li>


                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 1 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                        onClick={() => setSid(1)}>
                                        1
                                    </button>
                                </li>


                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 2 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                        onClick={() => setSid(2)}>
                                        2
                                    </button>
                                </li>
                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 3 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                        onClick={() => setSid(3)}>
                                        3
                                    </button>
                                </li>
                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 4 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                        onClick={() => setSid(4)}>
                                        4
                                    </button>
                                </li>
                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 5 ? 'btn-primary' : 'btn-outline-primary'}
`}
                                        onClick={() => setSid(5)}>
                                        5
                                    </button>
                                </li>
                                <li className="page-item px-1" aria-current="page">
                                    <button
                                        className={`
btn btn-sm 
${sId === 5 ? 'btn-primary ' : 'btn-outline-primary disabled'}
`}
                                        onClick={() => { setPid(pId + 1); setSid(1) }}>
                                        NEXT
                                    </button>
                                </li>
                            </ul>
                        </nav>

                    </div>

                }
            </footer >

            {pId === 21 &&
                <p className='text-center text-white fixed-bottom' style={{ bottom: "0", fontSize: "1.4rem" }}>
                    <span className='pe-2'>
                        Made With ❤️ By Pulkit Singh
                        (
                        <a className='link px-1' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/pulkit-singh-b28984127/">
                            <span className='pe-1'>
                                connect
                            </span>
                            <svg className='mb-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        )
                        & Akansha Singh
                        (
                        <a className='link px-1' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/akansha-kumari-133a89189/">
                            <span className='pe-1'>
                                connect
                            </span>
                            <svg className='mb-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        )
                    </span>
                    |
                    <a className='link px-2' target="_blank" rel='noreferrer' href="https://github.com/CodingKrills/REACT-GUESS-THE-FACE-APP">
                        <span className='pe-2 text-'>
                            Source Code
                        </span>
                        <svg className='mb-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </p>
            }

        </div >
    )
}

export default Person