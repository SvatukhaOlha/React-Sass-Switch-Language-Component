import React, { useEffect, useState, useContext } from 'react';
import { API_KEY, API_URL } from './config';
import { LanguageContext } from '../context/header/languageContext';

export default function GetData() {
  const { language } = useContext(LanguageContext);

  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}${language}`, {
      headers: {
        Authorization: '0a70a1ca-077bfd47-131563e7-1a80456e',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataApi(data.items);
        console.log(data.items);
      });
  }, [language]);
  return (
    <>
      {dataApi.map((el) => (
        <p>{el.description}</p>
      ))}
    </>
  );
}
