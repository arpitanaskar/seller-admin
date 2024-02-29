import React from "react";
import Input from "./Input";
import { useRef } from "react";

const Form = (props) => {
  const productIDRef = useRef();
  const sellingPriceRef = useRef();
  const productNameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      productID: productIDRef.current.value,
      sellingPrice: sellingPriceRef.current.value,
      productName: productNameRef.current.value,
    };
    productIDRef.current.value = "";
    sellingPriceRef.current.value = "";
    productNameRef.current.value = "";

    props.onReceiveData(data);

    localStorage.setItem(data.productID, JSON.stringify(data));
  };

  return (
    <form onSubmit={submitHandler}>
      <Input label="Product ID" type="number" ref={productIDRef} />
      <Input label="Selling Price" type="number" ref={sellingPriceRef} />
      <Input label="Product Name" type="text" ref={productNameRef} />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default Form;
