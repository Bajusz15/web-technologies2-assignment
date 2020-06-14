import {useEffect, useState} from "react";
import uuid from "uuid/v4";
export default initialProducts => {
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const fetchData=  async () => {
      const result = await fetch("http://localhost:5000/products/")
          .then(res => res.json())
          .then(
              (result) => {
                // setProducts([...products, { id: uuid(), name: name, price: price,  completed: false }]);
                return result;
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                //do nothing
                return [];
              }
          );
      setProducts(result);
    };
    fetchData();
  }, []);
  return {
    products,
    addProduct: (name, price) => {
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
                console.log({id: result.id, name: name, price: price})
                // setProducts([...products, { id: uuid(), name: name, price: price,  completed: false }]);
                setProducts([...products, {_id: result.id, name: name, price: price}]);
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
      const updatedProducts = products.filter(p => p._id !== productID);
      fetch("http://localhost:5000/products/"+productID, {
        method: 'DELETE'
      })
          .then(res => res.json())
          .then(
              (result) => {
                // setProducts([...products, { id: uuid(), name: name, price: price,  completed: false }]);
                setProducts(updatedProducts);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                //do nothing
              }
          )
    },
    editProduct: (productID, name, price) => {
      const updatedProducts = products.map(product =>
        product._id === productID ? { ...product, name: name, price: price } : product
      );
      setProducts(updatedProducts);
    }
  };
};
