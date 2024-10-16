import React from "react"
import "./Home.css"
import hero from "../../assets/mypic.png"
import skill1 from "../../assets/skill1.png"
import skill2 from "../../assets/skill2.png"
import skill3 from "../../assets/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Lokinder Singh</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Professional Coder.",
                    " Web Developer 💻.",
                    " React Dev 🙂.",
                    // " React Dev 😎",
                    " React Native Dev ⌨.",
                    " MERN Stack Dev 🖥."
                  ]}
                  loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>

                    <a
                      href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                      title="Visit The Site"
                    > <i className='fab fa-facebook-f' /></a>

                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='img' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
