import { Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {useDispatch } from 'react-redux';
import { updateLanguage } from '../../../store/actions/app-actions';

function LanguageSelector() {
  const languages = ['english', 'telugu', 'hindi', 'tamil'];
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(updateLanguage(lng))
  };

  return (
    <div>
      <button className="btn" onClick={() => changeLanguage('en')}>English</button>
      <button className="btn" onClick={() => changeLanguage('tel')}>Telugu</button>
      {/* <Button variant="contained">Text</Button> */}
    </div>
  );
}

export default LanguageSelector;
