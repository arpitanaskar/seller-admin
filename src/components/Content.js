import React, { useState, useEffect } from "react";

const Content = (props) => {
  const [data, setData] = useState(props.data);
  const [totalValue, setTotalValue] = useState(0);

  // Update data state when props.data changes
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    let sum = 0;
    data.forEach((item) => {
      sum += +item.sellingPrice;
    });

    setTotalValue(sum);
  }, [data]);

  const deleteHandler = (productID) => {
    // Implement delete functionality here
    const updatedData = data.filter((item) => item.productID !== productID);
    setData(updatedData);

    localStorage.removeItem(productID);
  };

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.productID}>
            {item.sellingPrice} - {item.productName}
            <button onClick={() => deleteHandler(item.productID)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Total Value Worth of Products : {totalValue}</h4>
    </>
  );
};

export default Content;
