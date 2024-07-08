import React, { useEffect, useState } from "react";
import axios from "axios";
import Languages from "./Languages";
import HexLang from "./HexLang";

const API = "https://6631e134c51e14d69562ac29.mockapi.io/language";

function ParentComponent() {
  const [category, setCategory] = useState([]);

  async function getLanguage() {
    try {
      const res = await axios.get(API);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <div>
      <Languages category={category} />
      <HexLang category={category} />
    </div>
  );
}

export default ParentComponent;
