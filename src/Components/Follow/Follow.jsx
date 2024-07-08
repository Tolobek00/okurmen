import React from "react";

import banner from "../../Assets/image/Rectangle 5.png";

import "./follow.scss";

function Follow() {
  return (
    <div className="follow container">
      <div>
        <div>
          <h1 className="title_first">Самый быстрый путь к Знаниям</h1>
        </div>
      </div>
      {/* <div> */}
      <div>
        <h1 className="title">Месячный план</h1>
        <section>
          <h1>299 ₽</h1>
          <h2>/ месяц</h2>
        </section>
        <p>
          Автоматическое выставление счетов. Подписку можно отменить в любое
          время.
        </p>
        <button>
          Подписаться
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Follow;
