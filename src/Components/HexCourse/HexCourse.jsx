import React, { useEffect, useState } from "react";

import "./hex.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://6631e134c51e14d69562ac29.mockapi.io/language";

function HexCourse() {
  // const navigate = useNavigate();

  // function goToPages(Link) {
  //   navigate(Link);
  // }
  const [category, setCategory] = useState([]);

  async function getLanguage() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getLanguage();
  }, []);

  const getRows = (category, pattern) => {
    const rows = [];
    let index = 0;

    pattern.forEach((count) => {
      const rowItems = category.slice(index, index + count);
      rows.push(rowItems);
      index += count;
    });
    return rows;
  };

  const layoutPattern = [2, 1, 2, 1];

  const rows = getRows(category, layoutPattern);

  return (
    <div>
      <div className="container1">
        {rows.map((category, rowIndex) => (
          <div className="course" key={rowIndex}>
            {category.map((item, itemIndex) => (
              <div className="language-course" key={itemIndex}>
                <section className="section_flag">
                  <img src={item.flags} alt="" className="flag-img" />
                </section>
                <div className="name_avatar">
                  <img src={item.avatar} alt="" />
                  <h1>{item.name}</h1>
                </div>
                <div className="star">
                  <h1>{item.title}</h1>
                  <img src={item.star} alt="" />
                </div>
                <div className="kviz">
                  <section>
                    <h1>{item.kviz}</h1>
                  </section>
                  <section>
                    <h1>{item.cart}</h1>
                  </section>
                  <section>
                    <h1>{item.age}</h1>
                  </section>
                  <section className="grade">
                    <img src={item.starYellow} alt="" />
                    <h1>{item.grade}</h1>
                  </section>
                </div>
                <div className="paragraf">
                  <p>{item.paragraf}</p>
                </div>
                <div className="categories">
                  <section>
                    <h1>{item.category}</h1>
                  </section>
                  <section>
                    <h1>{item.category2}</h1>
                  </section>
                  <section>
                    <h1>{item.category3}</h1>
                  </section>
                </div>
                <div className="metal">
                  <img src={item.categoryImg} alt="" />
                  <img src={item.categoryImg1} alt="" />
                  <img src={item.categoryImg2} alt="" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HexCourse;
