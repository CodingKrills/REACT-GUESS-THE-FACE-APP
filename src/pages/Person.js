import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

// * Imports

import '../public/css/overlay.css'

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
        <div className='container' style={{ marginTop: "1%" }}>

            <div className='row justify-content-left'>
                <Link to="/">
                    <h6>GO HOME</h6>
                </Link>
            </div>

            <div>
                <div className='row justify-content-center'>
                    <div className='col col-md-1'>
                        <h6>PERSON - <b>{pId}</b></h6>
                    </div>
                    <div className='col col-md-1'>
                        <h6>STEP - <b>{sId}</b></h6>
                    </div>
                </div>
            </div>
            <div className='text-center'>

                {/* // * person 1  =========================================================================================== */}

                {pId === 1 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                        <div className="overlay-top-step-one"></div>
                        <div className="overlay-right-step-one"></div>
                        <div className="overlay-bottom-step-one"></div>
                        <div className="overlay-left-step-one"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p1} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p2} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p3} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p4} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p5} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p6} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p7} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p8} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p9} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 10 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p10} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 11 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
                }

                {/* // * person 11  ===========================================================================================*/}

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


                {pId === 11 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p11} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 12 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p12} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 13 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p13} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 14 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p14} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 15 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p15} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 16 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p16} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 17 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p17} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 18 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p18} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 19 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p19} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
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


                {pId === 20 && sId === 54 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={p20} alt="virat" />
                        <div className="overlay-top-step-five"></div>
                        <div className="overlay-right-step-five"></div>
                        <div className="overlay-bottom-step-five"></div>
                        <div className="overlay-left-step-five"></div>
                    </div>
                }

                {/* // * person 20  ===========================================================================================*/}

                <nav>
                    <ul className="pagination justify-content-center pagination-lg text-center mt-4">
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 1 && pId !== 1 ? 'btn-primary ' : 'btn-outline-primary disabled'}
                         `}
                                onClick={() => { setPid(pId - 1); setSid(1) }}>
                                PREV PERSON
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                                btn btn-lg 
                            ${sId === 1 ? 'btn-primary' : 'btn-outline-primary'}
                            `}
                                onClick={() => setSid(1)}>
                                1
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 2 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(2)}>
                                2
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 3 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(3)}>
                                3
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 4 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(4)}>
                                4
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 5 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(5)}>
                                5
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
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

            </div>


        </div >
    )
}

export default Person