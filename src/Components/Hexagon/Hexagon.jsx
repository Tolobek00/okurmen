import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import polygon from "../../Assets/Svg/Polygon 17.svg";
import polygon1 from "../../Assets/Svg/Polygon 18.svg";
import polygon2 from "../../Assets/Svg/Polygon 19.svg";
import polygon3 from "../../Assets/Svg/Polygon 20.svg";
import polygon4 from "../../Assets/Svg/Polygon 21.svg";
import polygon5 from "../../Assets/Svg/Polygon 21 (1).svg";
import polygon6 from "../../Assets/Svg/Polygon 22.svg";
import polygon7 from "../../Assets/Svg/Polygon 23.svg";
import polygon_hex from "../../Assets/Svg/Polygon_svgfor.svg";
import avatarka from "../../Assets/Svg/AVATAR reviews.svg";
import remove from "../../Assets/Svg/Remove.svg";
import star from "../../Assets/Svg/star yellow.svg"

import "./hexagon.scss";

const imageSources = [
  polygon, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7,
  polygon, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7,
  polygon, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7,
];

function Hexagon() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const outRef = useRef(null);
  const aRef = useRef(null);

  function goToPages(Link) {
    navigate(Link);
  }

  useEffect(() => {
    function clickHandler(event) {
      if (
        (outRef.current && !outRef.current.contains(event.target)) ||
        (aRef.current && aRef.current.contains(event.target))
      ) {
        setPopup(false);
        console.log("ok my friend");
      }
    }
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [outRef, aRef]);

  return (
    <div className="hexagon_polygon">
      <div className="hexagon Wrapper1">
        <div className="scroll-wrapper">
          <div className="slider" style={{ display: "flex", justifyContent: "space-between" }}>
            {imageSources.map((src, index) => (
              <div className="borders" key={index}>
                <img src={src} alt="" onClick={() => setPopup(!popup)} ref={aRef} />
              </div>
            ))}
          </div>
          <div className="slider" style={{ display: "flex", justifyContent: "space-around", marginLeft: "140px",  }}>
            {imageSources.map((src, index) => (
              <div className="borders" key={index}>
                <img src={src} alt="" onClick={() => setPopup(!popup)} ref={aRef} />
              </div>
            ))}
          </div>
          <div className="slider" style={{ display: "flex", justifyContent: "space-between" }}>
            {imageSources.map((src, index) => (
              <div className="borders" key={index}>
                <img src={src} alt="" onClick={() => setPopup(!popup)} ref={aRef} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="polygon_container">
        {popup && (
          <div ref={outRef} className="polygon-container">
            <div className="polygon">
              <img className="avatar" src={polygon_hex} alt="" />
              <section className="avatar-name">
                <img src={avatarka} alt="" />
                <h1>gingerbread</h1>
              </section>
              <section className="title-polygon">
                <h1>Саморазвитие и самопознание</h1>
              </section>
              <div>
                <section>
                  32 карточки
                </section>
                <section>
                  <img src={star} alt="" />
                  4.9 (24)
                </section>
              </div>
              <section className="button">
                <button onClick={() => goToPages("/editLanguage")}>Перейти к курсу</button>
              </section>
              <section className="remove">
                <img src={remove} alt="" ref={aRef} />
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hexagon;
