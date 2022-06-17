import React from 'react'
//import Footer from '../Footer/Footer';
import "./Hero.scss";



const Hero = () => {
  return (

<>
<section className='hero'>
    <div className='container'>
      <div className='row' id='HeroLet'>


          <h1>Welcome To Optimum University</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='' >
          <button className='primary-btn' id='herobtn' >
            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
          </button>
          <button id='herobtn'>
            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <div className='margin'></div>


</>



    )
}

export default Hero