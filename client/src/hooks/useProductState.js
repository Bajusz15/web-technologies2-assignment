import { useState } from "react";
import uuid from "uuid/v4";
export default initialProducts => {
  const [products, setProducts] = useState(initialProducts);
  return {
    products,
    addProduct: (name, price) => {
      //todo: add to mongodb
      fetch("http://localhost:5000/products/add", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({name: name, price: price})
      })
          .then(res => res.json())
          .then(
              (result) => {
                // setProducts([...products, { id: uuid(), name: name, price: price,  completed: false }]);
                setProducts([...products, {name: name, price: price}]);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
               //do nothing
              }
          )

    },
    removeProduct: productID => {
      //todo: delete from mongodb
      const updatedProducts = products.filter(p => p.id !== productID);
      setProducts(updatedProducts);
    },
    editProduct: (productID, name, price) => {
      const updatedProducts = products.map(product =>
        product.id === productID ? { ...product, name: name, price: price } : product
      );
      setProducts(updatedProducts);
    }
  };
};
