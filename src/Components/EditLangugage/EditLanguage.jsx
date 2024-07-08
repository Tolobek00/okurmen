import React from 'react';

import "./editLang.scss";
import RussianLang from '../RussianLang/RussianLang';
import Achievement from '../Achievement/Achievement';
import Follow from '../Follow/Follow';
import Comments from '../Comments/Comments';

function EditLanguage() {
  return (
    <div className='edit'>
      <RussianLang/>
      <Achievement/>
      <Follow/>
      <Comments/>
    </div>
  )
}

export default EditLanguage
