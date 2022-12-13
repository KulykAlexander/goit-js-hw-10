import Notiflix from 'notiflix';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const countrysList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
