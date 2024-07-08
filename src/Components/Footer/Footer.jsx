import React from "react";

import logo from "../../Assets/image/okurmen_logo.jpg";
import yarkima from "../../Assets/Svg/Yarkima.svg";
import facebook from "../../Assets/Svg/facebook vector.svg";
import instagram from "../../Assets/Svg/instagram vector.svg";
import vkontakte from "../../Assets/Svg/vk vector.svg";
// import Kyarkima from "../../Assets/Svg/© 2024 YarKiMa.svg";
// import politika from "../../Assets/Svg/Политика конфиденциальности.svg";
// import used from "../../Assets/Svg/Условия использования.svg";
import support from "../../Assets/Svg/Vector question.svg";
import pailgon from "../../Assets/Svg/Polygon 8.svg";

import "./footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function goToPages(Link) {
    navigate(Link);
  }
  return (
    <footer>
      <div className="top-footer">
        <div className="logo-footer">
          <section className="logo-yarkima" onClick={() => goToPages("/")}>
            <img src={logo} alt="" />
            <h1>Okurmen</h1>
          </section>
          <section className="apps">
            <div>
              <Link
                to={
                  "https://www.instagram.com/okurmen_it?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
              >
                <img src={instagram} alt="" />
              </Link>
            </div>
            <div>
              <Link to={"https://vk.com/"}>
                <img src={vkontakte} alt="" />
              </Link>
            </div>
            <div>
              <Link to={"https://apps.apple.com/ru/app/facebook/id284882215"}>
                <img src={facebook} alt="" />
              </Link>
            </div>
          </section>
        </div>
        <div className="categoires">
          <section>
            <div>
              <h1>{t("service")}</h1>
              <h2>{t("whatsYarkima")}</h2>
              <h2>{t("Requisites")}</h2>
              <h2>{t("Contacts")}</h2>
            </div>
          </section>
          <section>
            <div>
              <h1>{t("forStudents")}</h1>
              <h2>{t("Hints")}</h2>
              <h2>{t("quiz")}</h2>
              <h2>{t("memorization")}</h2>
            </div>
          </section>
          <section>
            <div>
              <h1>{t("forPartners")}</h1>
              <h2>{t("weOffer")}</h2>
              <h2>{t("partnerRegistration")}</h2>
              <h2>{t("personalArea")}</h2>
            </div>
          </section>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="construction">
          <div>
            <h1>© 2024 YarKiMa</h1>
          </div>
          <div>
            <img src={pailgon} alt="" />
            <h1>{t("PrivacyPolicy")}</h1>
            <img src={pailgon} alt="" />
            <h1>{t("TermsOfUse")}</h1>
          </div>
        </div>
        <div className="support">
          <img src={support} alt="" />
          <h1>{t("Support")}</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
