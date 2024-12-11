import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  let localStorageValue = localStorage.getItem(key);

  let parsedValue;

  if (localStorageValue) {
    try {
      parsedValue = JSON.parse(localStorageValue);
    } catch (error) {
      console.log('Error parsing JSON:', error);
      parsedValue = null;
    }
  } else {
    parsedValue = null;
  }

  const initialState = parsedValue || initialValue;

  const [state, setState] = useState(initialState);

  function setLocalStorage(newValue) {
    setState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [state, setLocalStorage];
}
