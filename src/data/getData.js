import React, { useEffect, useState, useContext } from 'react';
import { API_KEY, API_URL } from './config';
import { LanguageContext } from '../context/header/languageContext';

export default function GetData() {
  const { language } = useContext(LanguageContext);

  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}${language}`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataApi(data.items);
      });
  }, [language]);
  return (
    <>
      {dataApi.map((el) => (
        <p key={el.id}>{el.description}</p>
      ))}
    </>
  );
}
