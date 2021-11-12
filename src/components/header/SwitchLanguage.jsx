import React, {useState, useContext} from 'react'
import styles from './styles/styles.sass'
import {LanguageContext} from '../../context/header/languageContext'


function SwitchLanguage() {

    const { setLanguage } = useContext(LanguageContext);

    return (
      <div className='lang_menu'>
        <div className='selected_lang' onClick={() => setLanguage('ru')}>
          Russian
        </div>
        <ul>
          <li>
            <a href='#' onClick={() => setLanguage('en')} className='en'>
              English
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('fr')} className='fr'>
              French
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('de')} className='de'>
              German
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('es')} className='es'>
              Spanish
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('it')} className='it'>
              Italian
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('pl')} className='pl'>
              Polish
            </a>
          </li>
          <li>
            <a href='#' onClick={() => setLanguage('ar')} className='ar'>
              Arabic
            </a>
          </li>
        </ul>
      </div>
    );
}
export default SwitchLanguage
