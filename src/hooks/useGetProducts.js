import React from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios(API).then((response) => setProducts(response?.data || []));
  }, [API]);

  return {
    products,
    setProducts,
  };
};
