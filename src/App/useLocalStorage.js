import React from 'react';

function useLocalStorage(itemName, initialValue){

  // initialValue es el estado que se tiene por defecto
  const[item, setItem] = React.useState(initialValue);

  // true es el estado que se tiene por defecto cuando se esta cargando
  const[loading, setLoading] = React.useState(true);
  
  // false es el estado que se tiene por defecto cuando es error
  const[error, setError] = React.useState(false);
  
  // Encapsulamos dentro de mi Efect
  React.useEffect(()=>{
    // con setTimeOut me encargo de ejecutar esto una sola vez cada cierto tiempo
    // y el 2000 es el tiempo en milisegundo
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage};