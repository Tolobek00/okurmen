import React from 'react'

import img from "../../Assets/Svg/IMAGE.svg"
import img1 from "../../Assets/Svg/IMAGE (1).svg"
import img2 from "../../Assets/Svg/IMAGE (2).svg"
import img3 from "../../Assets/Svg/IMAGE (3).svg"
import img4 from "../../Assets/Svg/IMAGE (4).svg"

import "./photos.scss"

function Photos() {
  return (
    <div className='photos'>
      <div className='title'>
        <h1>ФОТОГРАФИИ</h1>
        <h1>Все</h1>
      </div>
      <div className='img_container'>
        <section>
          <img src={img1} alt="" />
        </section>
        <section>
          <img src={img2} alt="" />
        </section>
        <section>
          <img src={img3} alt="" />
        </section>
        <section>
          <img src={img4} alt="" />
        </section>
        <section>
          <img src={img} alt="" />
        </section>
        <section>
          <img src={img2} alt="" />
        </section>
        <section>
          <img src={img4} alt="" />
        </section>
      </div>
    </div>
  )
}

export default Photos
