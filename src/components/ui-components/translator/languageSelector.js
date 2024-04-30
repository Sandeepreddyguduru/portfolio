import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import {useDispatch } from 'react-redux';
import { updateLanguage } from '../../../store/actions/app-actions';

function LanguageSelector() {
  const languages = [{type: 'en', name: 'english' }, {type: 'hin', name: 'hindi' }, {type: 'tel', name: 'telugu' }]//, {type: 'tn', name: 'tamil' }];
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(updateLanguage(lng))
  };

  return (
    // <div className="menu-section">
    //   {languages?.map((language, i) => {
    //     return <motion.button
    //       whileHover={{ scale: 0.98 }}
    //       whileTap={{ scale: 0.9 }}
    //       transition={{ type: "spring", stiffness: 200, damping: 15 }} key={i} className="menu-option" onClick={(e) => { e?.stopPropagation(); changeLanguage(language?.type) }}>{language?.name}</motion.button>
    //   })}
    //   {/* // <button className="btn" onClick={() => changeLanguage('tel')}>Telugu</button> */}
    //   {/* <Button variant="contained">Text</Button> */}
    // </div>
    <div className="menu-section">
      {languages?.map((language, i) => {
        return <div key={i} className={`menu-option${language?.type === i18n.language ? ' active' : ''}`} onClick={(e) => { e?.stopPropagation(); updateLanguage(language?.type); changeLanguage(language?.type) }}>{language?.name}</div>
      })}
  </div>
  );
}

export default LanguageSelector;
